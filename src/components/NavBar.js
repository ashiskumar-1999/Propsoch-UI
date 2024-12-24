import React from 'react'
import styles from '@/styles/Home.module.css'
import { CiSearch, CiLocationOn, CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";



const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navitems}>
            <CiSearch />
            <p className={styles.navitem} onClick={styles.navitem.selected}>Explore</p>
        </div>
        <div className={styles.navitems}>
            <IoIosHeartEmpty />
            <p className={styles.navitem} onClick={styles.navitem.selected}>WishList</p>
        </div>
        <div className={styles.navitems}>
            <CiLocationOn />
            <p className={styles.navitem} onClick={styles.navitem.selected}>Show Map</p>
        </div>
        <div className={styles.navitems}>
            <CiUser />
            <p className={styles.navitem} onClick={styles.navitem.selected}>Log in</p>
        </div>
        
    </div>
  )
}

export default NavBar