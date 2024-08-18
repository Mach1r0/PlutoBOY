"use client";
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../style/navbar.module.css";
import Sidebar from "./Sidebar";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.getElementById("my-drawer-4").checked = !isOpen;
  };

  return (
    <>
      <Head>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');`}
          {`@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');`}
        </style>
      </Head>

      <div className={styles["container-all"]}>
        <div className={styles["container-logo"]}>
          <img src="/img/Opium-logo.png" alt="Logo" />
          <Link href="/">
            <h1> Opium </h1>
          </Link>
        </div>

        <div className={styles["search-container"]}>
          <CiSearch className={styles["search-icon"]} />
          <input
            type="text"
            placeholder=""
            className={styles["search-input"]}
          />
        </div>

        <div className={styles["menu"]}>
          <Link href="/login">
            <button className={styles["menu-btn"]}>Entrar</button>
          </Link>
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary" onClick={toggleSidebar}>  
               <IoIosMenu className={styles["dropdown"]} onClick={toggleSidebar} />
            </label>
          </div>
        </div>
      </div>

      {/* Sidebar component, controlled by the state */}
      <div className={`${isOpen ? styles["drawer-open"] : ""}`}>
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
}