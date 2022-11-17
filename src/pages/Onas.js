/*Импорты библиотек строки 2-4*/
import React from "react";
import {NavLink} from "react-router-dom";
import {Container, Row, Col, Card, Form, Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";

/*Импорт изображения*/
import logo from '../images/logo.png'

export default function Onas() {
    return (
        <>

        {/*Заголовок*/}
        <h1>О нас</h1>

        {/*Панель навигации*/}
        <header className="header">

            {/*Логотип*/}
            <img className="logo" src={logo} alt="logo" />

            <NavLink to="/" className="active">Главная</NavLink>
            <NavLink to="/onas" className="active">О нас</NavLink>
            <NavLink to="/catalog" className="active">Каталог</NavLink>
            <NavLink to="/contact" className="active">Контакты</NavLink>

            {/*Кнопка авторизации/Регистрации*/}
            <NavLink to="/signup" className="c-button"> <Button className="button">Вход</Button></NavLink>
        </header>
        </>
    )
}