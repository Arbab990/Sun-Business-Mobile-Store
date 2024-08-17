import React from "react";
import AboutImg from "../assets/images/repair.jpg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what we can help you with?</h3>
            <p>
            At Sun Business Center, we're dedicated to enhancing your mobile experience
            with our wide range of phone accessories and solutions.
            Whether you're looking to protect your device, enhance its functionality, or simply express your style, we've got you covered.
            Our store offers everything from high-quality to chargers, headphones, and more. We understand that your phone is an 
            essential part of your life, and we're here to ensure it stays in top condition.
            
            </p>
            <p>
            Beyond accessories, our expert team is ready to assist with repairs,
            personalized advice to keep you connected and your device performing at its best. 
            At Sun Business Center, your satisfaction is our priority, and we're here to help you find exactly what you need.
            </p>
            <a href="#menu" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
