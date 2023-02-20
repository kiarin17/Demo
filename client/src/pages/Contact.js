import React from "react";
import карта from '../images/карта.png'
import Header from "../components/Header";
import inst from '../images/Ссылки.png'


export default function Contact() {
    return (
        <>
       <Header />

        <body className="bof">
            <div className="cont">ГДЕ НАС НАЙТИ?</div>
            <img className="karta" src={карта} />

            <div className="me">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</div>
            <img className="inst" src={inst} />


            <div className="contact">КОНТАКТЫ</div>
            <div className="phone">Телефон:</div>
            <div className="number">+7-901-161-13-62</div>
            <div className="adres">Адрес:</div>
            <div className="adres1">г. Владимир ул. Большая Московская д.1</div>
            
        </body>

        

        </>
        
    )
}