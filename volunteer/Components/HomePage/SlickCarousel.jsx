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
        style={{ ...style, display: "block", right: "3%", zIndex: 1 }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "3%", zIndex: 1 }}
        onClick={onClick}
      />
    );
  }

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 6000,
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
              src="https://d32baadbbpueqt.cloudfront.net/Homepage/1a5a5848-f287-4da7-b122-23ccb9324c83.jpg"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://d32baadbbpueqt.cloudfront.net/Homepage/2938eed1-8d16-4dec-bab2-f6e484adb659.gif"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://d32baadbbpueqt.cloudfront.net/Homepage/2d934fad-8c2a-4f7d-85fc-ea1ed8f23673.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <Slider {...settings1} className={styles.bannerSlider2}>
        <div>
          <img
            src="  https://d32baadbbpueqt.cloudfront.net/Homepage/e320d245-5aeb-4433-b0b1-9a67c2d78303.jpg
"
            alt=""
          />
        </div>
        <div>
          <img
            src="  https://d32baadbbpueqt.cloudfront.net/Homepage/0b94d1b3-8011-435b-b38d-8acdc8f53710.jpg
"
            alt=""
          />
        </div>
        <div>
          <img
            src="  https://d32baadbbpueqt.cloudfront.net/Homepage/8f3b13ce-686b-4bd1-b2e5-e2534e2de3ec.gif
"
            alt=""
          />
        </div>
        <div>
          <img
            src="  https://d32baadbbpueqt.cloudfront.net/Homepage/5edfd368-351e-47e7-8384-6bca3eb16df9.jpg
"
            alt=""
          />
        </div>
        <div>
          <img
            src="  https://d32baadbbpueqt.cloudfront.net/Homepage/0004c0e1-9c86-430f-8d94-293724658e3f.jpg
"
            alt=""
          />
        </div>
        <div>
          <img
            src="  https://d32baadbbpueqt.cloudfront.net/Homepage/0e92b87a-f7d0-4b9b-955f-69d072926812.jpg
"
            alt=""
          />
        </div>
        <div>
          <img
            src="  https://d32baadbbpueqt.cloudfront.net/Homepage/de7f55a1-a84b-4690-8f11-1dddc2518964.jpg
"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
