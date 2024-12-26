import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import data from "../data";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import Logo from "@/components/Logo";

export default function Home() {
  const [items, setItems] = useState(data.slice(0, 16)); // Initial load
  const [isFetching, setIsFetching] = useState(false);
  const fetchMoreItems = async () => {
    setIsFetching(true);
    // Simulate fetching mock data
    const newItems = await new Promise((resolve) =>
      setTimeout(() => {
        const newData = data.slice(items.length, items.length + 20);
        resolve(newData);
      }, 1000),
    );
    setItems((prevItems) => [...prevItems, ...newItems]);
    setIsFetching(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !isFetching
      ) {
        fetchMoreItems();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching]);
  return (
    <div className={styles.container}>
      <Logo />
      <NavBar />
      <div className={styles.propertiescontainer}>
        {items.map((data) => (
          <Card
            key={data.id}
            propertyid={data.id}
            Src={data.src}
            Views={data.views}
            Rating={data.rating}
            Name={data.name}
            Date={data.date}
          />
        ))}
      </div>
      {isFetching ? (
        <div className={styles.spinner} />
      ) : (
        <p
          style={{
            width: "full",
            fontSize: "15px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {" "}
          More Properties will be Available soon
        </p>
      )}
    </div>
  );
}
