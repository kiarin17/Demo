/*Строка 2 - 5 это импорты библиотек*/
import React from "react";  
import {NavLink} from "react-router-dom";
import {Container, Row, Col, Card, Form, Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import {MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';

/*Импорты фотографий*/
import logo from '../images/logo.png'  
import ppp from '../images/ppp.png'
import декор from '../images/декор.png'
import povar from '../images/povar.jpg'
import Burger from '../images/Burger.jpg'
import Cosmo from '../images/Cosmo.jpg'
import зал from '../images/зал.png'


export default function Main() {
    return (
        <>
          {/*Шапка сайта */}
          <header className="header">

              {/*Логотип */}
              <img className="logo" src={logo} alt="logo" />

              {/*Панель навигации */}
              <NavLink to="/" className="active">Главная</NavLink>
              <NavLink to="/onas" className="active">О нас</NavLink>
              <NavLink to="/catalog" className="active">Каталог</NavLink>
              <NavLink to="/contact" className="active">Контакты</NavLink>
              <NavLink to="/signup" className="c-button"> <Button className="button">Вход</Button></NavLink>
          </header>

          <body>

            {/*Контент страницы */}
            <div className="conteiner1">

              {/*Фоновая фотография */}
              <img className="foto" src={ppp}  />

              {/*Название сайта */}
              <div className="nazvanie">SPLETNI Restaurant</div>

              {/*Адрес */}
              <div className="nazvanie1">г. Владимир ул. Большая Московская д.1</div>
            </div>

            <div className="conteiner2">

                {/*фотография к описанию ресторана */}
                <img className="foto2" src={декор}  />

                {/*Заголовок */}
                <div className="res">Ресторан</div>

                {/*Текст*/}
                <div className="rest"> В мире есть много разных ресторанов. У каждого хорошего - своя «изюминка». Ресторан во Владимире SPLETNI отличается от всех других тем, что ресторан создан для компаний подружек. Здесь компания подруг может встретиться после тяжелого рабочего дня чтобы расслабиться и конечно же посплетничать.Посетить наш ресторан может каждый. Именно в нашем заведении большое количество различных блюд по доступным ценам, хорошая музыка, уютный зал.Мы вас ждём!</div>
            </div>

          <div>
            {/*Слайдер */}
            {/*showIndicators showControls fade - стрелки для перелистывания */}
            <MDBCarousel showIndicators showControls fade>

              {/*Слайд 1 */}
            <MDBCarouselItem 
              className='slider'
              itemId={1}
              src={povar}
            />

            {/*Слайд 2 */}
            <MDBCarouselItem
              className='slider'
              itemId={2}
              src={Cosmo}
        
            />

            {/*Слайд 3 */}
            <MDBCarouselItem
              className='slider'
              itemId={3}
              src={Burger}
            />
          </MDBCarousel>
        </div>

          {/*Описание зала */}
        <div className="conteiner2">

          {/*Фото */}
          <img className="foto2" src={зал}  />

          {/*Заголовок */}
          <div className="res">Наш зал</div>

          {/*Текст */}
          <div className="rest">Представляем вашему вниманию наш зал. Комфортное помещение созданное как для двух друзей, так и для больших шумных компаний.</div>
        </div>

      </body>

        </>
    )
}