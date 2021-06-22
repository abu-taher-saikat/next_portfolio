

import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from 'hamburger-react'
import Link from 'next/Link';
import styles from "../styles/Header.module.scss";
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 620px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const changeState = ()=>{
    setNavVisibility(!isNavVisible);
    setOpen(false)
  }

  return (
    <header className={styles.Header}>
      {/* <img src={require("../assets/logo.png")} className="Logo" alt="logo" /> */}
      {/* Saikat */}
      <div className={styles.Logo}>Saikat</div>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={5}
        classNames={styles.NavAnimation}
        unmountOnExit
      >
        <nav className={styles.Nav}>
          <Link href="/"><a onClick={changeState}>Home</a></Link>
          <Link href="/about"><a onClick={changeState}>About</a></Link>
          <Link href="/project"><a onClick={changeState}>Project</a></Link>
          <Link href="/blog"><a onClick={changeState}>Blog</a></Link>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className={styles.Burger}>
        <span role="img" aria-label="">
          {" "}
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {" "}
        </span>
      </button>

    </header>
  );
}
