import React from "react";
import {Container, Row, Col, Card, Form, Button, FormGroup, FormLabel, FormControl, } from "react-bootstrap";
import pochta from '../images/Почта.png'
import adress from '../images/Адрес.png'
import mobile from '../images/Телефон.png'
import inst from '../images/Инстаграмм.png'
import vk from '../images/ВК.png'

const Footer = () => (

      
       <div className="footer">
        <img className="mobile" src={mobile}  />
        <img className="adress" src={adress}  />
        <img className="pochta" src={pochta}  />
        
       
        
       
        <p className="spletni">OOO SPLETNI Restaurant</p>
      </div>
      
 
);

export default Footer;