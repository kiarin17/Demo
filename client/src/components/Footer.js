import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter  style={{background:"rgb(104, 3, 3)"}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='foot'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                SPLETNI Restaurant
              </h6>
              <p>
              Для тех, кто ценит качество
              </p>
            </MDBCol>

            

            <MDBCol md="3" lg="2" xl="2" className='foot'>
              <h6 className='text-uppercase fw-bold mb-4'>Страницы</h6>
              <p>
                <a href='/' className='foot'>
                  Главная
                </a>
              </p>
              <p>
                <a href='onas' className='foot'>
                  О нас
                </a>
              </p>
              <p>
                <a href='catalog' className='foot'>
                  Меню
                </a>
              </p>
              <p>
                <a href='contact' className='foot'>
                  Контакты
                </a>
              </p>
              <p>
                <a href='signup' className='foot'>
                  Кабинет
                </a>
              </p>
              <p>
                <a href='bronorovanie' className='foot'>
                  Бронирование
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='foot'>
              <h6 className='text-uppercase fw-bold mb-4'>Контакты</h6>
              <p>
                <MDBIcon className="foot" />
               ул. Большая Московская, д.1
              </p>
              <p>
                <MDBIcon icon="envelope" className="foot" />
                SPLETNIres@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="foot" /> + 7-901-161-13-62
              </p>
              <p>
                <MDBIcon icon="print" className="foot" /> 20-19-23
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className='p-4 border-bottom'>
        
      </section>

      <div className='foot1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Авторское право:
        <a className='foot1'>
        SPLETNI Restaurant
        </a>
      </div>
    </MDBFooter>
  );
}
