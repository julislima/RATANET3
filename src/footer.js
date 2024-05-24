// Footer.js

import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import { FaHouse } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { RiSignalTowerFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";


function Footer() {
  return (
    
    <footer className="conteiner">
          <div className="icons">

          <FaHouse size={35} />
          <FaShoppingCart size={35} />
          <LuCalendarDays size={35} />
          <RiSignalTowerFill size={35} />
          <FaShoppingBag size={35}/>
          </div>
    </footer>
  );
}

export default Footer;
