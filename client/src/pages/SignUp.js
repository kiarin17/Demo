//импорт компонентов
import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SignUp() {
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function signUp(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8080/user/create", {
        firstName,
        middleName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        const { success, message } = res.data;

        if (!success) {
          return alert(message);
        }

        setFirstName();
        setMiddleName();
        setLastName();
        setEmail();
        setPassword();

        return alert("Успешная регистрация");
      })
      .catch((error) => console.error(error));
  }

  function signIn(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8080/user/authenticate", { email, password })
      .then((res) => {
        const { success, message } = res.data;

        if (!success) {
          return alert(message);
        }

        setEmail();
        setPassword();

        return alert("Успешная авторизация");
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      {/*Панель навигации*/}
      <div className="SNG"> 
      <Header />

      {/*Форма регистрации*/}
      <div className="r">РЕГИСТРАЦИЯ</div>
      <Container  style={{float:"left", width:"1100px" }}>
        <Row>
          <Col>
            <Card style={{background:"rgba(255, 255, 255, 0.07)", backdropFilter:"blur(50px)"}}>
              {/*Название формы*/}
              <Card.Body>
                <Form onSubmit={signUp} className="form">
                  <FormGroup className="mb-3" controlId="formFirstName">
                    {/*Название поля ввода*/}
                    <FormLabel>Имя</FormLabel>
                    {/*Тип вводных данных*/}
                    <Form.Control
                      className="mb-2"
                      type="text"
                      value={firstName}
                      placeholder="Введите имя"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <FormControl.Feedback type="invalid">
                      Имя - обязательное поле
                    </FormControl.Feedback>
                  </FormGroup>

                  <FormGroup className="mb-3" controlId="formSecondName">
                    {/*Название поля ввода*/}
                    <FormLabel>Фамилия</FormLabel>
                    {/*Тип вводных данных*/}
                    <Form.Control
                      className="mb-2"
                      type="text"
                      value={lastName}
                      placeholder="Введите фамилию"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <FormControl.Feedback type="invalid">
                      Фамилия - обязательное поле
                    </FormControl.Feedback>
                  </FormGroup>

                  <FormGroup className="mb-3" controlId="formPatronymic">
                    {/*Название поля ввода*/}
                    <FormLabel>Отчество</FormLabel>
                    {/*Тип вводных данных*/}
                    <Form.Control
                      className="mb-2"
                      type="text"
                      value={middleName}
                      placeholder="Введите отчество"
                      onChange={(e) => setMiddleName(e.target.value)}
                    />
                    <FormControl.Feedback type="invalid">
                      Отчество - не обязательное поле
                    </FormControl.Feedback>
                  </FormGroup>

                  <FormGroup className="mb-3" controlId="formEmail">
                    {/*Название поля ввода*/}
                    <FormLabel>Email</FormLabel>
                    {/*Тип вводных данных*/}
                    <Form.Control
                      className="mb-2"
                      type="email"
                      value={email}
                      placeholder="Введите email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormControl.Feedback type="invalid">
                      Email - обязательное поле
                    </FormControl.Feedback>
                  </FormGroup>

                  <FormGroup className="mb-3" controlId="formPassword">
                    {/*Название поля ввода*/}
                    <FormLabel>Пароль</FormLabel>
                    {/*Тип вводных данных*/}
                    <Form.Control
                      className="mb-2"
                      type="password"
                      value={password}
                      placeholder="Введите пароль"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControl.Feedback type="invalid">
                      Пароль - обязательное поле
                    </FormControl.Feedback>
                  </FormGroup>

                  <FormGroup className="mb-3" controlId="formPasswordConfim">
                    {/*Название поля ввода*/}
                    <FormLabel>Подтверждение пароля</FormLabel>
                    {/*Тип вводных данных*/}
                    <Form.Control
                      className="mb-2"
                      type="password"
                      placeholder="Введите пароль"
                    />
                    <FormControl.Feedback type="invalid">
                      Пароль - обязательное поле, должно совпадать с полем
                      password
                    </FormControl.Feedback>
                  </FormGroup>

                  <FormGroup className="mb-3" controlId="formRules">
                    <Form.Check
                      type="checkbox"
                      label="Согласие с правилами регистрации"
                    ></Form.Check>
                  </FormGroup>
                  <Button style={{borderRadius:"50px"}} className="but" type="submit">
                    Регистрация
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/*Форма авторизации*/}
      <div className="a">АВТОРИЗАЦИЯ</div>
      <Container style={{float:"right", width:"1100px"}}>
        <Row>
          <Col>
            <Card style={{background:"rgba(255, 255, 255, 0.01)", backdropFilter:"blur(50px)"}} >
              {/*Название формы*/}
              <Card.Body>
                <Form className="form" onSubmit={signIn}>
                  <FormGroup className="mb-3" controlId="formEmail">
                    {/*Название поля ввода*/}
                    <FormLabel>Почта</FormLabel>
                    {/*Тип вводных данных*/}
                    <Form.Control
                      className="mb-2"
                      type="email"
                      value={email}
                      placeholder="Введите почту"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormControl.Feedback type="invalid">
                      Почта - обязательное поле
                    </FormControl.Feedback>
                  </FormGroup>

                  <FormGroup className="mb-3" controlId="formPassword">
                    {/*Название поля ввода*/}
                    <FormLabel>Пароль</FormLabel>
                    {/*Тип вводных данных*/}
                    <Form.Control
                      className="mb-2"
                      type="password"
                      value={password}
                      placeholder="Введите пароль"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <FormControl.Feedback type="invalid">
                      Пароль - обязательное поле
                    </FormControl.Feedback>
                  </FormGroup>

                  <FormGroup className="mb-3" controlId="formRules">
                    
                  </FormGroup>

                  <Button style={{borderRadius:"50px"}} className="but" type="submit">
                    Авторизация
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <section style={{marginTop: 1300}}>
      <Footer />  
      </section>
    </div>
    </>
  );
}


