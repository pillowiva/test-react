import React, { useContext, useState, Suspense, startTranslation } from "react";
import { AuthContext } from "../../context";
import style from "C:/Users/Daria/Desktop/test-react/src/styles/Light/Main.module.css"
import MyInput from "../../UI/components/input/MyInput";
import MyButton from "../../UI/components/button/MyButton";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Gistogram from "../../UI/components/gistogram/Gistogram.tsx";
import CyclicDiagram from "../../UI/components/doughnut/CyclicDiagram.tsx";
import Table from "../../UI/components/table/Table.tsx"

const MainLight = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    // переменные 
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    // не помню зачем делала, но пусть пока будут
    const [submitted, setSubmitted] = useState(false);
    // для чтения логина из поля ввода
    const handleUsernameChange = (event) => {
        const username = event.target.value;
        setLoginData({ ...loginData, username });
    };
    // для чтения пароля из поля ввода
    const handlePasswordChange = (event) => {
        const password = event.target.value;
        setLoginData({ ...loginData, password });
    };
    const [isRemember, setRemember] = useState()
    // для отправления запросов
    const login = async (event) => {
        event.preventDefault();
        setSubmitted(true);

        const { username, password } = loginData;
        console.log(loginData)

        // Проверка значений только если они были введены
        if (username && password) {
            try {
                const response = await axios.post('https://postman-echo.com/post', {
                    username,
                    password
                });

                console.log(response.data);
                if (response.data && response.data.success) {
                    console.log(response.data);
                    console.log(response.data.success);

                } else {
                    alert('Неправильный логин или пароль');
                }
            } catch (error) {
                alert('Произошла ошибка при входе. Пожалуйста, попробуйте позже.');
            }
        }
    };
    // для смены языка с русского на английский и тд
    const { t, i18n } = useTranslation();
    // для перехода между страницами
    const history = useHistory();
    // при нажатии на кнопку регистрации
    const handleRedirectToRegistration = () => {
        history.push('/registration');
    };
    // при нажатии на надпись Забыли пароль?
    const handleRedirectToChangeCode = () => {
        history.push('/change-code');
    };
    const returnToLogin = () => {
        history.push('/login');
    };
    const returnOurTeam = () => {
        history.push('/ourteam');
    };
    const returnLinks = () => {
        history.push('/links');
    };
    // проверка корректны ли данные, которые введены в поля логина и пароля
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const handleLogin = () => {
        const { username, password } = loginData;
        console.log(username, password);
        if (username === '' || password === '') {
            setShowForgotPassword(false);
        } else {
            // когда-нибудь тут будет проверка :)
            if (false) {
                setShowForgotPassword(false); // а пока что я няшка <3
            } else {
                // Некорректный логин или пароль
                setShowForgotPassword(true);
            }
        }
    };
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
                    <div className={style.Buttons}>
                        <MyButton
                            style={{ backgroundColor: '#1F5CB6', color: '#ffffff', width: "15%", height: "90%", marginRight: "5%", borderRadius: "11px", fontSize: "12px", marginTop: "0.5%" }}
                            onClick={returnLinks}
                        >
                            {t('report')}
                        </MyButton>
                        <MyButton
                            style={{ backgroundColor: '#ffffff', color: '#000000', width: "15%", borderRadius: "11px", height: "90%", marginRight: "5%", fontSize: "12px", marginTop: "0.5%" }}
                            onClick={returnLinks}
                        >
                            {t('plan')}
                        </MyButton>
                    </div>
                </div>
                <div className={style.Diagrams}>
                    <div className={style.First}>
                        <div className={style.Gistograms}>
                            <Gistogram />
                        </div>
                        <div className={style.FirstDought}>
                            <CyclicDiagram />
                        </div>
                        <div className={style.SecondDought}>
                            <CyclicDiagram />
                        </div>
                    </div>
                    <div className={style.Tables}>
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainLight;
