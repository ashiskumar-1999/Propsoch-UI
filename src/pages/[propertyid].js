import { useRouter } from 'next/router';
import Image from 'next/image';
import data from '@/data';
import React, { useState,useEffect } from 'react'
import Logo from '@/components/Logo'
import styles from "@/styles/Home.module.css";
import NavBar from '@/components/NavBar';
import { CiLocationOn } from "react-icons/ci";

const PropertyDetails = () => {
  const router = useRouter();
  const {propertyid} = router.query;
  const property = data.find((item) => item.id === parseInt(propertyid));
  return (
   <>
   <div className={styles.propertycontainer}>
    <Logo />
      <Image src={property?.src[0]} width={349} height={486} alt="property-image" className={styles.imagecontainer && styles.propertyimage}/>
      <div className={styles.heading}>
        <div>
          <p className={styles.propertyname}>{property?.name}</p>
          <p className={styles.viewscount}>Sector7, Gurgaon</p>
        </div>
        <div>
          <p className={styles.propertyname}>1.5 cr</p>
          <p className={styles.viewcounts}>EMI Available</p>
        </div>
      </div>
        <p className={styles.propertyname}>Location</p>
        <div className={styles.heading}>
          <div>
          <CiLocationOn style={{width:"30px", height:"30px", borderRadius:"25px",  backgroundColor:"#FF750433", }}/>
          </div>
          <div>
          <p className={styles.propertyaddress}>Jl. Gerungsari, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277</p>
          </div>
      </div>
      <div className={styles.heading}>
        <p className={styles.landmarks}>
          2Hospitals
        </p>
        <p className={styles.landmarks}>
          4 Gas Stations
        </p>
        <p className={styles.landmarks}>
          2 Schools
        </p>
      </div>
   </div>
   <NavBar />
   </>
  )
}

export default PropertyDetails;