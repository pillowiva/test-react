import React, { useContext, useState, Suspense, startTranslation } from "react";
import { AuthContext } from "../../context";
import style from "C:/Users/Daria/Desktop/test-react/src/styles/Light/Registration.module.css"
import MyInput from "../../UI/components/input/MyInput";
import MyButton from "../../UI/components/button/MyButton";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import mockup from 'C:/Users/Daria/Desktop/test-react/src/дешевые мокапы.svg';
import qr from 'C:/Users/Daria/Desktop/test-react/src/qr.svg';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import OurTeam from "C:/Users/Daria/Desktop/test-react/src/ourteam.svg";

const CodeLight = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [submitted, setSubmitted] = useState(false);
    const handleUsernameChange = (event) => {
        const username = event.target.value;
        setLoginData({ ...loginData, username });
    };

    const handleCode = (event) => {
    };
    // переход между страницами
    const history = useHistory();
    const handleRedirectToMain = () => {
        history.push('/main');
    };
    const returnToLogin = () => {
        history.push('/login');
    };
    const returnOurTeam = () => {
        history.push('/ourteam');
    };
    const { t, i18n } = useTranslation();
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {startTranslation}
            </Suspense>
            {/** контейнер страницы */}
            <div className={style.LoginPage}>
                {/** заголовок*/}
                <div className={style.Header}>
                    <a
                        onClick={returnToLogin}
                        className={style.HeaderLink}
                    >
                        WealthFamily
                    </a>
                </div>
                <div className="container-fluid">
                    <div className={style.MainPage}>
                        <div className="row">
                            <div className={'col-lg-2'}></div>
                            <div className={`col-lg-5 text-center`}>
                                <div className={style.Info}>
                                    <h2 className={style.text}>{t('welcome')}</h2>
                                    <h3 className={style.text}>{t('else')}</h3>
                                    <img src={mockup} />
                                    <div className={style.Link}>
                                        <a className={style.text}>App Store</a>
                                        <a className={style.text}>Google Play</a>
                                        <a className={style.text}>Linux</a>
                                        <a className={style.text}>Windows</a>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-lg-3`}>
                                <div className={style.MainForm}>
                                    <form className={style.form} >
                                        <h1>{t('welcome-register')}</h1>
                                        <MyInput
                                            style={{ margin: '0px', marginTop: '8%' }}
                                            type="password"
                                            placeholder={t('placeholder-change-code')}
                                            onChange={handleCode}
                                        />
                                        <MyButton
                                            style={{ backgroundColor: '#1F5CB6', color: '#ffffff', margin: '0px', marginTop: '8%' }}
                                            onClick={handleRedirectToMain}
                                        >
                                            {t('continue')}
                                        </MyButton>
                                    </form>
                                </div>
                                <div className={style.QR} >
                                    <img src={qr} className={style.qrImg} />
                                    <div className={style.textQr}>
                                        <h5 className={style.text}>{t('qr')}</h5>
                                        <h6 className={style.text}>{t('let-scan')}</h6>
                                        <a className={style.more}>{t('more')}</a>
                                    </div>
                                </div>
                            </div>
                            {/** ссылки внизу страницы */}
                            <div className={style.Bottom}>
                                <h4>WealthFamily © 2024</h4>
                                <a
                                    className={style.text}
                                    onClick={returnOurTeam}
                                    style={{ marginRight: "15%" }}
                                >
                                    {t('our-team')
                                    }
                                </a>
                                <a
                                    onClick={() => i18n.changeLanguage('en')}
                                    className={style.text}
                                >
                                    English
                                </a>
                                <a
                                    onClick={() => i18n.changeLanguage('ru')}
                                    className={style.text}
                                    style={{ marginRight: "10%" }}
                                >
                                    Русский
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CodeLight;
