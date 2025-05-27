import React from "react";
import productsData from "./product.json";
import "./home.css"
import camera from "../images/camera.jpg";
import gamepad from "../images/gamepad.jpg";
import headphone from "../images/headphone.jpg";
import hometheatre from "../images/hometheatre.jpg";
import laptop from "../images/laptop.jpg";
import mobile from "../images/mobile.jpg";
import pods from "../images/pods.jpg";
import speaker from "../images/speaker.jpg";

const images = {
  "camera.jpg": camera,
  "gamepad.jpg": gamepad,
  "headphone.jpg": headphone,
  "hometheatre.jpg": hometheatre,
  "laptop.jpg": laptop,
  "mobile.jpg": mobile,
  "pods.jpg": pods,
  "speaker.jpg": speaker,
};

function ProductGrid() {
  return (
    <div className="products-grid">
      {productsData.map((product, index) => (
        <div key={index} className="product-item">
          <img src={images[product.img]} alt={product.name} />
          <p className="name">{product.name}</p>
          <p className="price">{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
