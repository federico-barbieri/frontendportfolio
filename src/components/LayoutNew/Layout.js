import Head from "next/head";

import React, { useContext } from "react";

import law from "./Layout.module.css";

import { useState } from "react";

import NavBurger from "../NavBurger/NavBurger";

const Layout = ({ children }) => {
  // burger menu control
  const [navOpen, setNavOpen] = useState(false);


  return (
    <div>
      <Head>
        <title>SwampFest</title>
        <meta name="description" content="Generated by Shrek & Donkey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <header className={law.headerBox}>
        

        <NavBurger />

       
      </header>
      <main>{children}</main>
      <footer>
      </footer>
    </div>
  );
};

export default Layout;
