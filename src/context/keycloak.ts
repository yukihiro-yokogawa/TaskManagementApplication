import { createContext } from 'react';
import { KeycloakState } from '../types/keycloak';

/**
 * Keycloakの認証情報を保管するContext関数.
 *
 * @type {*}
 */
export const KeycloakContext = createContext<KeycloakState>({
  Keycloak: null,
  Authenticated: false,
  UserId: '',
  MailAddress: '',
});

/**
 * KeycloakContextを書き換えるためのReducer関数.
 *
 * @param {KeycloakState} state
 * @param {{ type: string }} action
 * @return {*}
 */
export const keycloakReducer = (
  state: KeycloakState,
  action: { type: string }
) => {
  switch (action.type) {
    case 'authenticated': {
      return {
        Keycloak: state.Keycloak,
        Authenticated: state.Authenticated,
        UserId: state.UserId,
        MailAddress: state.MailAddress,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
