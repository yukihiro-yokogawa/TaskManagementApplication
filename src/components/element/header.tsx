import Link from 'next/link';
import React from 'react';
import { ButtonPrimary } from '~/styles/button';
import { Header, Logo } from '~/styles/header';

/**
 * 全ページ共通のHeaderを表示するコンポーネント.
 *
 * @return {*}
 */
const HeaderComponent = () => {
  return (
    <header>
      <Header>
        <div>
          <Link href={'/'} passHref>
            <Logo>Task</Logo>
          </Link>
        </div>
        <div>
          <Link href={'/logout'} passHref>
            <ButtonPrimary>Logout</ButtonPrimary>
          </Link>
        </div>
      </Header>
    </header>
  );
};

export default HeaderComponent;
