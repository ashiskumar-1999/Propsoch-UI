import { useRouter } from 'next/router';
import Image from 'next/image';
import data from '@/data';
import React, { useState,useEffect } from 'react'
import Logo from '@/components/Logo'
import styles from "@/styles/Home.module.css";
import NavBar from '@/components/NavBar';

const PropertyDetails = () => {
  const router = useRouter();
  const {propertyid} = router.query;
  const property = data.find((item) => item.id === parseInt(propertyid));


  return (
   <>
   <div className={styles.propertycontainer}>
    <Logo />
      <Image src={property?.src} width={349} height={486} alt="property-image" className={styles.imagecontainer}/>
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
      <div>
        <p className={styles.propertyname}>Location</p>
      </div>
   </div>
   <NavBar />
   </>
  )
}

export default PropertyDetails;