import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import wishlists from "@/pages/wishlists";
import { CiSearch, CiLocationOn, CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navitems && styles.navitems.selected}>
        <Link href="/">
          <CiSearch className={styles.navicon} />
          <p className={styles.navitem}>Explore</p>
        </Link>
      </div>
      <div className={styles.navitems}>
        <Link href="/wishlists">
          <IoIosHeartEmpty className={styles.navicon} />
          <p className={styles.navitem} onClick={styles.navitem.selected}>
            WishList
          </p>
        </Link>
      </div>
      <div className={styles.navitems}>
        <Link href="/">
          <CiLocationOn className={styles.navicon} />
          <p className={styles.navitem} onClick={styles.navitem.selected}>
            Show Map
          </p>
        </Link>
      </div>
      <div className={styles.navitems}>
        <Link href="/">
          <CiUser className={styles.navicon} />
          <p className={styles.navitem} onClick={styles.navitem.selected}>
            Log in
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
