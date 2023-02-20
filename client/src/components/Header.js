import React, {useState} from "react";  
import {NavLink} from "react-router-dom";

/*Импорты фотографий*/
import logo from '../images/logo.png'  
import Order from "./Order";


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
              <NavLink to="/signup" className="active">Вход</NavLink>
              <NavLink to="/bronirovanie" className="active">Бронирование</NavLink>
              <NavLink to='/' onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop ${cartOpen && 'active'}`}>Корзина</NavLink>

              {cartOpen && (
                <div className="shop-cart">
                  {props.orders.length > 0 ?
                      showOrders(props) : showNothing()}
                </div>
              )}
          </header>
          </>
    )
}