import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SlickCarousel.module.css";
import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";

export default function SimpleSlider() {
  const cart = useSelector((state) => state.cart.cartItems);

  console.log(cart);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "1%",
          zIndex: 1,
          backgroundColor: "gray", // Set the background color of the button
          width: "30px", // Increase the button size by setting the width
          height: "30px", // Increase the button size by setting the height
          borderRadius: "50%", // Make the button circular by setting the border radius
          color: "white", // Set the text color
          fontSize: "20px", // Set the font size of the text
          textAlign: "center", // Center align the text
          lineHeight: "37px", // Vertically center the text inside the button
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          left: "1%",
          alignItems: "center",
          zIndex: 1,
          backgroundColor: "gray", // Set the background color of the button
          width: "30px", // Increase the button size by setting the width
          height: "30px", // Increase the button size by setting the height
          borderRadius: "50%", // Make the button circular by setting the border radius
          color: "white", // Set the text color
          fontSize: "20px", // Set the font size of the text
          textAlign: "center", // Center align the text
          lineHeight: "37px", // Vertically center the text inside the button
        }}
        onClick={onClick}
      >
        {/* You can also add an arrow icon or text inside the button */}
      </div>
    );
  }

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings3 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings4 = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className={styles.bannermain}>
        <Slider {...settings1} className={styles.bannerSlider1}>
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/1683295470538-N34A8RL56FEGXIPAELCX/looking-to-volunteer-texas-75204.jpg?format=1500w"
              alt="img"
              style={{ width: "90%", height: "400px", margin: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/1683295473750-HWE21R3I2203TPBY8AFN/apply-csr-online.jpg?format=1500w"
              alt=""
              style={{ width: "90%", height: "400px", margin: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/1683295471208-LBROMK5MRJBGFM5ZO4EI/schedule-demo-voly.jpg?format=1500w"
              alt=""
              style={{ width: "90%", height: "400px", margin: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/1683295471406-ZFGI1QJ0HZBV9H0E5WEG/volunteernow-voly-discount-depot-sign-up-sales.jpg?format=1500w"
              alt=""
              style={{ width: "90%", height: "400px", margin: "auto" }}
            />
          </div>
        </Slider>
      </div>
      <Slider {...settings1} className={styles.bannerSlider2}>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/1683295470538-N34A8RL56FEGXIPAELCX/looking-to-volunteer-texas-75204.jpg?format=1500w"
            alt="img"
            style={{ width: "90%", height: "400px", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/1683295473750-HWE21R3I2203TPBY8AFN/apply-csr-online.jpg?format=1500w"
            alt=""
            style={{ width: "90%", height: "400px", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/1683295471208-LBROMK5MRJBGFM5ZO4EI/schedule-demo-voly.jpg?format=1500w"
            alt=""
            style={{ width: "90%", height: "400px", margin: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/1683295471406-ZFGI1QJ0HZBV9H0E5WEG/volunteernow-voly-discount-depot-sign-up-sales.jpg?format=1500w"
            alt=""
            style={{ width: "90%", height: "400px", margin: "auto" }}
          />
        </div>
      </Slider>
    </div>
  );
}
