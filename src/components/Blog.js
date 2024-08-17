import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          other <span>Services</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={item.id||index}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href={item.link} class="title">
                  {item.heading}
                </a>
                <p>{item.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
