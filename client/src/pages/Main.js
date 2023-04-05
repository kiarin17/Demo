/*Строка 2 - 5 это импорты библиотек*/
import React, { useState, useCallback, useRef } from "react";  
import {MDBCarousel, MDBCarouselItem, MDBContainer} from 'mdb-react-ui-kit';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from "react-bootstrap";
import table from "../images/столы.jpg"

/*Импорты фотографий*/ 
import sl1 from '../images/sl1.jpg'
import sl2 from '../images/sl2.jpg'
import sl3 from '../images/sl3.webp'
import ppp from '../images/ppp.png'
import Header from "../components/Header";
import Footer from "../components/Footer";
import video1 from "../video/spletni.mp4";
import burger from '../images/burger.png'
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

export default function Main() {
  const videoRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    videoRef.current.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
    videoRef.current.pause();
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
    return (
        <>
        
          {/*Шапка сайта */}
          <Header />
          <section style={{display:'block', justifyContent:'flex-start', marginLeft:-1300}}>
            <MDBContainer>
              <video 
                autoPlay
                ref={videoRef}
                src={video1}
                type="video/mp4"
                loop
                muted
                no-controls
                className="video1"
              ></video>
            </MDBContainer>
            </section>
              <section style={{flex:1, marginTop:-1400}}>
                    <Container className="Conta" >
                      <Carousel className="Carousel" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  
                  <img
                    className="d-block w-100"
                    src={sl1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3><span>НАШ ЗАЛ</span></h3>
                    <p><span>Комфортный зал в котором можно вкусно поужинать</span></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={sl2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3><span>Фермерские продукты</span></h3>
                    <p><span>Готовим для вас исключительно из качественных продуктов</span></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={sl3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3><span>Лучшие повора Владимира</span></h3>
                    <p>
                    <span>Повара мастерству которых позавидует даже шеф Ивлев</span>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Container>
              </section>
             
              <section style={{marginBottom:100}}>
              <div style={{width:647,height:647,backgroundColor:'rgb(102, 4, 3)',borderRadius:'50%',marginLeft:-144,marginTop:100,}}>
              </div>
                  <img
                    className="d-block"
                    src={burger}
                    style={{marginLeft:150,marginTop:-500,width:409,height:409,marginBottom:250}}
                    alt="Third slide"
                  />
                  
                  </section>
                  <Container  style={{float:"left", width:"100px" }}>
        <Row>
          <Col>
            <Card style={{background:"rgba(255, 255, 255, 0.07)", backdropFilter:"blur(50px)", width:"841px", height:"343px", left:"653px", boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 100px rgba(255, 255, 255, 0.25)', borderRadius:"25px", marginTop:-770}}>
              {/*Название формы*/}
              <Card.Body>
                <Form  className="form">
                <FormLabel className="ac" >Акции</FormLabel>
                <FormLabel>Бизнес-ланч всё по 300₽</FormLabel>
                <FormLabel>Банкеты и корпоративы от 1500₽ на человека</FormLabel>
                <FormLabel>*отдельный зал</FormLabel>
                <FormLabel>*возможен свой алкоголь</FormLabel>
                    
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container  style={{float:"left", width:"1100px" }}>
        <Row>
          <Col>
            <Card style={{background:"rgba(255, 255, 255, 0.07)", backdropFilter:"blur(50px)", width:"841px", height:"343px", left:"1553px", boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 100px rgba(255, 255, 255, 0.25)', borderRadius:"25px", marginTop:-770}}>
              {/*Название формы*/}
              <Card.Body>
                <Form  className="form">
                  
                    
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
                  
                  
              <section>
              <Container>
              <div className="table">СХЕМА РАСПОЛОЖЕНИЯ СТОЛОВ</div>
              <img className="tab-two" src={table} />
              </Container>
              </section>

  <Footer/>

           

     
        </>
    )
}