/*Строка 2 - 5 это импорты библиотек*/
import React from "react";  
import {MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';


/*Импорты фотографий*/ 
import ppp from '../images/ppp.png'
import povar from '../images/povar.jpg'
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Main() {
  
    return (
        <>
          {/*Шапка сайта */}
          <Header />

          <body>

            {/*Контент страницы */}
            <div className="conteiner1">

              {/*Фоновая фотография */}
              <img className="foto" src={ppp}  />

              {/*Название сайта */}
              <div className="nazvanie">SPLETNI Restaurant</div>

              {/*Адрес */}
              <div className="nazvanie1">г. Владимир ул. Большая Московская д.1</div>
              <div className="deviz">Для тех, кто ценит качество</div>
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

            <MDBCarouselItem 
              className='slider'
              itemId={2}
              src={povar}
            />

            <MDBCarouselItem 
              className='slider'
              itemId={3}
              src={povar}
            />

           

          

          </MDBCarousel>

          
        </div>

        

      </body>

      <Footer />
     
        </>
    )
}