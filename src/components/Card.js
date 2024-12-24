import Image from 'next/image'
import React from 'react'
import styles from "@/styles/Home.module.css"
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { useRouter } from 'next/router';

const Card = ({propertyid,Src, Views, Rating,Name, Date}) => {
    const router = useRouter();

    const handleClick = ( ) => {
        router.push(`${propertyid}`)
    }
    const handleToggle = () =>{

    }
   
  return (
    <div className={styles.cardcontainer} onClick={handleClick}>
        <div style={{position:"relative",display:"inline-block"}}>
            <Image src={Src} alt="Property-image" width={176} height={246} className={styles.imagecontainer}/>
            <div className={styles.wishlist}>
                <IoIosHeartEmpty />
            </div>
        </div>
        <div className={styles.textcontainer}>
            <div className={styles.heading}>
                <div className={styles.viewsection}>
                    <FiEye width={12} height={12} style={{color:"#000000"}}/>
                    <p className ={styles.viewcounts}>{Views}</p>
                </div>
                <div className={styles.ratingsection}>
                    <FaStar width={12} height={12} style={{color:"#E57601"}}/>
                    <p className ={styles.ratingnumber}>{Rating}</p>
                </div>
            </div>
            <div>
                <h2 className={styles.name}>{Name}</h2>
                <p className={styles.date}>{Date}</p>
            </div>
        </div>
    </div>
  )
}

export default Card