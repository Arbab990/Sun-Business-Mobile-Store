import React from "react";
import { menu } from "../Data";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          Our <span>Products</span>
        </h1>

        <div className="box-container">
          {menu.map((item,index) => (
            <div className="box"key={item.id||index}>
              <img src={item.img}  />
              <h3>{item.heading}</h3>
              
              <h4 style={{color:'white',fontSize:'12px'}}>{item.price}</h4>  
              
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
