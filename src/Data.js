import menuImage1 from "./assets/images/charger.jpg";
import menuImage2 from "./assets/images/phones.jpg";
import menuImage3 from "./assets/images/earphones.jpg";
import menuImage4 from "./assets/images/cable.jpg";
import menuImage5 from "./assets/images/neckband2.jpg";
import menuImage6 from "./assets/images/speakers.jpg";
import cartImage1 from "./assets/images/cart-item-1.png";
import cartImage2 from "./assets/images/cart-item-2.png";
import cartImage3 from "./assets/images/cart-item-3.png";
import cartImage4 from "./assets/images/cart-item-4.png";
import productImage1 from "./assets/images/product-1.png";
import productImage2 from "./assets/images/product-3.png";
import productImage3 from "./assets/images/product-3.png";
import reviewImage1 from "./assets/images/pic-1.png";
import reviewImage2 from "./assets/images/pic-1.png";
import reviewImage3 from "./assets/images/pic-1.png";
import blogImage1 from "./assets/images/repair_service.webp";
import blogImage2 from "./assets/images/coca_cola.webp";
import blogImage3 from "./assets/images/money_transfer.webp";
const menu = [
  {
    
      id: 1,
      img: menuImage1,
      heading: 'Phone charger',
      style: {
        width: '100%',
        objectFit: 'contain',
      },
      price:"Rs. 80 onwards"
    
  },
  {
    id:2,
    img: menuImage2,
    heading:'Phones',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'fill',
    },
      price:"Rs. 1000 onwards"
  },
  {
    id: 3,
    img: menuImage3,
    heading:'earphones',
    
    price:"Rs. 80 onwards"
  },
  {
    id: 4,
    img: menuImage4,
    heading:'data cable',
    price:"Rs. 80 onwards"
  },
  {
    id:5,
    img: menuImage5,
    heading:'neckbands',
    style: {
      width: '100%',
      height: '100%',
    },
    price:"Rs. 300 onwards"

  },
  {
    id:6,
    img: menuImage6,
    heading:'Bluetooth Speakers',
    price:"Rs. 300 onwards"
  },
];

const cart = [
  {
    img: cartImage1,
  },
  {
    img: cartImage2,
  },
  {
    img: cartImage3,
  },
  {
    img: cartImage4,
  },
];

const product = [
  {
    img: productImage1,
  },
  {
    img: productImage2,
  },
  {
    img: productImage3,
  },
];
const review = [
  {
    img: reviewImage1,
  },
  {
    img: reviewImage2,
  },
  {
    img: reviewImage3,
  },
];
const blog = [
  {
    id:1,
    img: blogImage1,
    heading:"repair service",
    description:"repairing of all types of mobiles available.",
    link:"#",

  },
  {
    id:2,
    img: blogImage2,
    heading:"soft drinks available",
    description:"all types of soft drinks available",
    link:"#",
  },
  {
    id:3,
    img: blogImage3,
    heading:"money transfer service",
    description:" Instant money transfer services available ",
    link:"#",
  },
];
export { menu, cart, product, review, blog };
