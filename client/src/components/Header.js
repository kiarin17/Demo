import React, {useState} from "react";  
import { FaShoppingCart } from "react-icons/fa";
import {NavLink} from "react-router-dom";

/*Импорты фотографий*/
import logo from '../images/logo.png'  
import Order from "./Order";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const showOrders=(props)=>{
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}₽ </p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  )
}
  


export default function Main(props) {
  let [cartOpen, setCartOpen] = useState(false)
    return (
        <header>
               <Navbar.Brand className="logo" >
        <img src={logo}/>
        </Navbar.Brand>
               <Navbar className="navbar navbar-custom">
      <Container className="header">
        
          <Nav className="active" >
            <Nav.Link style={{marginRight:30}} className="amg" href="/">Главная</Nav.Link>
            <Nav.Link style={{marginRight:30}} className="amg" href="onas">О нас</Nav.Link>
            <Nav.Link style={{marginRight:30}} className="amg" href="catalog">Меню</Nav.Link>
            <Nav.Link style={{marginRight:30}} className="amg" href="contact">Контакты</Nav.Link>
            <Nav.Link style={{marginRight:30}} className="amg" href="signup">Вход</Nav.Link>
            <Nav.Link style={{marginRight:230}} className="amg" href="bronirovanie">Бронирование</Nav.Link>
            
            <div style={{ marginTop:8}}>
      <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-buttom ${cartOpen && 'active'}`}/>

{cartOpen && (
    <div className="shop-cart">
      {props.orders.length > 0 ?
          showOrders(props) : showNothing()}
    </div>
  )}
  </div> 
            
          </Nav>
             
      </Container>
      
    </Navbar>
    

              
        
          </header>
    )
}