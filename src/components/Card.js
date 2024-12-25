import Image from "next/image";
import React from "react";
import styles from "@/styles/Home.module.css";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { useRouter } from "next/router";
import Slider from "react-slick";

const Card = ({ propertyid, Src, Views, Rating, Name, Date }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplySpeed:3000,
        arrows: false,
        swipe: true,
        focusOnSelect:true,
        pauseOnHover:true,
      };
  const router = useRouter();

  const handleClick = () => {
    router.push(`${propertyid}`);
  };

  return (
    <div className={styles.cardcontainer} onClick={handleClick}>
      <div>
        <Slider {...settings}>
          {Array.isArray(Src) && Src.map((url, index) => (
            <div key={index}>
              <Image
                src={url}
                alt={`Property-image-${index}`}
                width={176} height={246}
                priority={index === 0}
                className={styles.imagecontainer}
                
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.textcontainer} onClick={handleClick}>
        <div className={styles.heading}>
          <div className={styles.viewsection}>
            <FiEye width={12} height={12} style={{ color: "#000000" }} />
            <p className={styles.viewcounts}>{Views}</p>
          </div>
          <div className={styles.ratingsection}>
            <FaStar width={12} height={12} style={{ color: "#E57601" }} />
            <p className={styles.ratingnumber}>{Rating}</p>
          </div>
        </div>
        <div>
          <h2 className={styles.name}>{Name}</h2>
          <p className={styles.date}>{Date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
