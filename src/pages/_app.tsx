import type { AppProps } from 'next/app';
import React, { useCallback, useEffect, useReducer } from 'react';
import { KeycloakContext, keycloakReducer } from '../context/keycloak';
import HeaderComponent from '../components/element/header';
import { CLIENT_ID, REALM } from '../utils/keycloak';

/**
 * Next.jsにおける全ページ共通のコンポーネント.
 *
 * @param {AppProps} { Component, pageProps }
 * @return {*}
 */
const App = ({ Component, pageProps }: AppProps) => {
  /**
   * Keycloakの認証情報を保持するStateとDispatcher関数
   *
   * @type {*}
   * */
  const [keycloakState, keycloakDispatch] = useReducer(keycloakReducer, {
    Keycloak: null,
    Authenticated: false,
    UserId: '',
    MailAddress: '',
  });

  /**
   * Keycloakのログイン認証画面を取得する関数.
   * keycloak-js内でwindow関数が使用されているためdynamic importを使用.
   */
  const importKeycloak = useCallback(async () => {
    const Keycloak = await import('keycloak-js');
    const keycloak = Keycloak.default({
      url: process.env.NEXT_PUBLIC_URL,
      realm: REALM,
      clientId: CLIENT_ID,
    });
    keycloak.init({ onLoad: 'login-required' }).then((authenticated: any) => {
      keycloakState.Keycloak = keycloak;
      keycloakState.Authenticated = authenticated;
      if (authenticated) {
        window.accessToken = keycloak.token;
        keycloak.loadUserProfile().then((data) => {
          if (keycloak.subject && data.email) {
            window.userId = keycloak.subject;
            keycloakState.UserId = keycloak.subject;
            keycloakState.MailAddress = data.email;
          }
          keycloakDispatch({ type: 'authenticated' });
        });
      }
    });
  }, [keycloakState]);

  useEffect(() => {
    importKeycloak();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {keycloakState.Authenticated ? (
        <KeycloakContext.Provider value={keycloakState}>
          <HeaderComponent />
          <Component {...pageProps} />
        </KeycloakContext.Provider>
      ) : (
        ''
      )}
    </>
  );
};
export default App;
