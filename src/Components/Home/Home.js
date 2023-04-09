import React from "react";
import "./Home.css";
import Product from "../Products/Products";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61um60VOoeL._SX3000_.jpg"
        />
        <div className="home_row">
          <Product
            id="49538094"
            title="BLENCOT Womens Casual Floral Deep V Neck Long Sleeve Long Evening Dress Cocktail Party Maxi Wedding Dresses"
            price={49.98}
            rating={3}
            image="https://m.media-amazon.com/images/I/71YswhmukcL._MCnd_AC_UL400_.jpg"
          />
          <Product
            id="12321341"
            title="BalanceFrom All Purpose 1/2-Inch Extra Thick High Density Anti-Tear Exercise Yoga Mat with Carrying Strap and Yoga Blocks"
            price={19.47}
            rating={5}
            image="https://m.media-amazon.com/images/I/81lNTYIBEIL._AC_UL400_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="5903851"
            title="Apple 2021 10.2-inch iPad (Wi-Fi, 64GB) - Silver (9th Generation)"
            price={589.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61PnHlc0HCL._AC_UL320_.jpg"
          />
          <Product
            id="23445930"
            title="Seagate Portable 2TB External Hard Drive HDD — USB 3.0 for PC, Mac, PlayStation, & Xbox -1-Year Rescue Service (STGX2000400)"
            price={61.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL640_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia And Shortcut Keys, For PC, Laptop - Black"
            price={39.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
            price={173.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL400_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="8293851"
            title="Apple 2021 10.2-inch iPad (Wi-Fi, 64GB) - Silver (9th Generation)"
            price={13.9}
            rating={5}
            image="https://m.media-amazon.com/images/I/614J+dBUWPL._AC_SY200_.jpg"
          />
          <Product
            id="23443850"
            title="Seagate Portable 2TB External Hard Drive HDD — USB 3.0 for PC, Mac, PlayStation, & Xbox -1-Year Rescue Service (STGX2000400)"
            price={15.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51FOlwtNnyL._AC_SY200_.jpg"
          />
          <Product
            id="4353254345"
            title="Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia And Shortcut Keys, For PC, Laptop - Black"
            price={29.9}
            rating={5}
            image="https://m.media-amazon.com/images/I/71fOcd0tLqS._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
