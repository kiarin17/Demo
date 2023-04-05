import React from "react";
import карта from '../images/карта.png'
import Header from "../components/Header";
import inst from '../images/Ссылки.png'
import Footer from "../components/Footer";
import ppp from '../images/ppp.png';


export default function Contact() {
    return (
        <>
       <Header />

       <section>

              {/*Фоновая фотография */}
              <img width={2550} height={1100} src={ppp}  />

              {/*Название сайта */}
              <div className="nazvanie">SPLETNI Restaurant</div>

              {/*Адрес */}
              <div className="deviz">Для тех, кто ценит качество</div>
        </section> 

        <section>
            <div className="cont">ГДЕ НАС НАЙТИ?</div>
            <div className="karta">
                <img src={карта} />
            </div>
        </section>
            
        {/* <section>
            <div className="me">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</div>
            <div className="inst">
                <img src={inst} />
            </div>
        </section> */}
           
        <section>
        <div className="contact">КОНТАКТЫ</div>
            <div className="phone">Телефон:</div>
            <div className="number">+7-901-161-13-62</div>
            <div className="adres">Адрес:</div>
            <div className="adres1">г. Владимир ул. Большая Московская д.1</div>
        </section>

    <section style={{marginTop:2500}}>
      <Footer />  
      </section>
        

        

        </>
        
    )
}