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

export default function Bronirovanie() {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [table, setTable] = useState();

  function reserve(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8080/reservation/create", {
        table,
        name,
        phoneNumber,
      })
      .then((res) => {
        const { success, message } = res.data;

        if (!success) {
          return alert(message);
        }

        setName();
        setPhoneNumber();
        setTable();

        return alert("Успешное бронирование");
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
    <div  className="SNG">
    <section>
      <Header />
      
      
      <div className="r1">БРОНИРОВАНИЕ</div>
      <Container >
        <Row>
          <Col>
            <Card style={{background:"rgba(255, 255, 255, 0.07)", backdropFilter:"blur(50px)"}} >
              {/*Название формы*/}

              <Card.Body>
                <Form className="form" onSubmit={reserve}>
                  <FormGroup  className="mb-3" controlId="formName">
                    {/*Название поля ввода*/}
                    <FormLabel>Имя</FormLabel>
                    <input
                      name="name"
                      className="mb-2"
                      type="text"
                      placeholder="Введите имя"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                    {/*Тип вводных данных*/}
                    <FormControl.Feedback type="invalid">
                      Имя - обязательное поле
                    </FormControl.Feedback>
                  </FormGroup>

                  <FormGroup className="mb-3" controlId="formLogin">
                    {/*Название поля ввода*/}
                    <FormLabel>Номер телефона</FormLabel>
                    <input
                      name="phone"
                      className="mb-2"
                      type="text"
                      placeholder="Введите номер телефона"
                      required
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {/*Тип вводных данных*/}
                    <FormControl.Feedback type="invalid">
                      Номер телефона - обязательное поле
                    </FormControl.Feedback>
                  </FormGroup>

                  <FormGroup className="mb-3" controlId="formPassword">
                    {/*Название поля ввода*/}
                    <FormLabel>Номер стола</FormLabel>
                    <input
                      name="table"
                      className="mb-2"
                      type="text"
                      required
                      placeholder="Введите номер желаемого столика"
                      onChange={(e) => setTable(e.target.value)}
                    />
                    {/*Тип вводных данных*/}
                    <FormControl.Feedback type="invalid">
                      Номер стола - обязательное поле
                    </FormControl.Feedback>
                  </FormGroup>

                  <FormGroup  className="mb-3" controlId="formRules">
                    
                    </FormGroup>

                  <Button className="but" type="submit">
                    Отправить
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </section>
      <section style={{marginTop: 500}}>
      <Footer />  
      </section>
      </div>
    </>
    
  );
}
