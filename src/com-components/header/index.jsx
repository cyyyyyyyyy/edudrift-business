import React from 'react';
import EdButton from 'components/EdButton';
import { withNamespaces } from 'react-i18next';

import style from './style.pcss';

import logo from '../../static/images/logo.png';

const Header = props => {
    const { t, i18n } = props;
    return (
        <header className={style.header}>
            <div className={style['header-inner']}>
                <div className={style.logo}>
                    <img src={logo} />
                </div>
                <div className={style.user}>
                    <EdButton>112312</EdButton>
                </div>
            </div>
        </header>
    );
};

export default withNamespaces()(Header);
