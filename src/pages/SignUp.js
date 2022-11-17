//импорт библиотеки
import React from "react";
import {NavLink} from "react-router-dom";
import logo from '../images/logo.png'
import { Container, Row, Col, Card, Form, Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";
import * as yup from "yup";

//Схема привязки
//const schema = yup.object().shape({
  //  name: yup.string().required(),
    //surname: yup.string().required(),
    //pasname: yup.string().required(),
 //   email: yup.string().required(),
   // password: yup.string().required(),
//    passwordConfirm: yup.string().required(),
//    rules: yup.string().required()
//})

export default function SignUp() {
    //const {control, handleSubmit, reset, formState: {error} } = useForm({ resolver: yupResolver(schema) }) 
    return (

        <>
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

        {/*Форма регистрации*/}
        <Container><Row><Col><Card>
            {/*Название формы*/}
            <Card.Header className="card">Регистрация</Card.Header>
                <Card.Body>
                    <Form className="form">
                        <FormGroup className="mb-3" controlId="formName"> 
                            {/*Название поля ввода*/}
                            <FormLabel>Имя</FormLabel>
                            {/*Тип вводных данных*/}
                            <Form.Control className="mb-2" type="text" placeholder="Введите имя" />
                            <FormControl.Feedback type="invalid">
                                Имя - обязательное поле
                            </FormControl.Feedback>
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formSurname"> 
                            {/*Название поля ввода*/}
                            <FormLabel>Фамилия</FormLabel>
                            {/*Тип вводных данных*/}
                            <Form.Control className="mb-2" type="text" placeholder="Введите фамилию" />
                            <FormControl.Feedback type="invalid">
                            Фамилия - обязательное поле
                            </FormControl.Feedback>
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formPatronymic"> 
                            {/*Название поля ввода*/}
                            <FormLabel>Отчество</FormLabel>
                            {/*Тип вводных данных*/}
                            <Form.Control className="mb-2" type="text" placeholder="Введите отчество" />
                            <FormControl.Feedback type="invalid">
                            Отчество - не обязательное поле
                            </FormControl.Feedback>
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formLogin"> 
                            {/*Название поля ввода*/}
                            <FormLabel>Логин</FormLabel>
                            {/*Тип вводных данных*/}
                            <Form.Control className="mb-2" type="text" placeholder="Введите отчество" />
                            <FormControl.Feedback type="invalid">
                            Логин - обязательное поле
                            </FormControl.Feedback>
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formEmail"> 
                            {/*Название поля ввода*/}
                            <FormLabel>Email</FormLabel>
                            {/*Тип вводных данных*/}
                            <Form.Control className="mb-2" type="text" placeholder="Введите email" />
                            <FormControl.Feedback type="invalid">
                            Email - обязательное поле
                            </FormControl.Feedback>
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formPassword"> 
                            {/*Название поля ввода*/}
                            <FormLabel>Пароль</FormLabel>
                            {/*Тип вводных данных*/}
                            <Form.Control className="mb-2" type="password" placeholder="Введите пароль" />
                            <FormControl.Feedback type="invalid">
                            Пароль - обязательное поле
                            </FormControl.Feedback>
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formPasswordConfim"> 
                            {/*Название поля ввода*/}
                            <FormLabel>Подтверждение пароля</FormLabel>
                            {/*Тип вводных данных*/}
                            <Form.Control className="mb-2" type="password" placeholder="Введите пароль" />
                            <FormControl.Feedback type="invalid">
                            Пароль - обязательное поле, должно совпадать с полем password
                            </FormControl.Feedback>
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formRules"> 
                            <Form.Check type="checkbox" label="Согласие с правилами регистрации"></Form.Check>
                        </FormGroup>
                        <Button className="but">Регистрация</Button>

                    </Form>
                </Card.Body>
                    </Card></Col></Row></Container>


                    {/*Форма авторизации*/}
        <Container><Row><Col><Card>
            {/*Название формы*/}
            <Card.Header>Авторизация</Card.Header>
                <Card.Body>
                    <Form className="form">
                        <FormGroup className="mb-3" controlId="formName"> 
                            {/*Название поля ввода*/}
                            <FormLabel>Логин</FormLabel>
                            {/*Тип вводных данных*/}
                            <Form.Control className="mb-2" type="text" placeholder="Введите имя" />
                            <FormControl.Feedback type="invalid">
                                Логин - обязательное поле
                            </FormControl.Feedback>
                        </FormGroup>

                       
                        <FormGroup className="mb-3" controlId="formPassword"> 
                            {/*Название поля ввода*/}
                            <FormLabel>Пароль</FormLabel>
                            {/*Тип вводных данных*/}
                            <Form.Control className="mb-2" type="password" placeholder="Введите пароль" />
                            <FormControl.Feedback type="invalid">
                            Пароль - обязательное поле
                            </FormControl.Feedback>
                        </FormGroup>

                        
                        <FormGroup className="mb-3" controlId="formRules"> 
                            <Form.Check type="checkbox" label="Согласие с правилами регистрации"></Form.Check>
                        </FormGroup>
                        <Button className="but">Вход</Button>

                    </Form>
                </Card.Body>
                    </Card></Col></Row></Container>
            </>
    )
}
