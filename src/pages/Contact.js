import React from "react";
import {NavLink} from "react-router-dom";
import {Container, Row, Col, Card, Form, Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import logo from '../images/logo.png'

export default function Contact() {
    return (
        <>
        <h1>Контакты</h1>
       
        <header className="header">
            <img className="logo" src={logo} alt="logo" />
            <NavLink to="/" className="active">Главная</NavLink>
            <NavLink to="/onas" className="active">О нас</NavLink>
            <NavLink to="/catalog" className="active">Каталог</NavLink>
            <NavLink to="/contact" className="active">Контакты</NavLink>
            <NavLink to="/signup" className="c-button"> <Button className="button">Вход</Button></NavLink>
        </header>
        </>
    )
}