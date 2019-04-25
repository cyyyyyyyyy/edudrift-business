import React from 'react';
import { withTranslation } from 'react-i18next';
import { Formik } from 'formik';

import EdInput from '../components/EdInput';
import EdButtom from '../components/EdButton';

import style from './home.module.scss';

@withTranslation
class Home extends React.Component {

    render() {
        const {t} = this.props;
        return (
            <div className={style.main}>
                <h2 className={style.title}>{t('EduDrift Admin Panel')}</h2>
                <ul>
                    <li style={{ paddingBottom: 10 }}>
                        <span className={style.label}>Email Address*</span>
                        <EdInput style={{ width: 250 }} />
                    </li>
                    <li>
                        <span className={style.label}>Password*</span>
                        <EdInput style={{ width: 250 }} />
                    </li>
                </ul>
                <EdButtom>SIGN IN</EdButtom>
            </div>
        );
    }
}