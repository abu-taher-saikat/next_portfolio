import React, { useState, useEffect } from "react";
import Link from 'next/Link';
import styles from "./Header.module.scss";
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
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

  return (
    <header className={styles.Header}>
      {/* <img src={require("../assets/logo.png")} className="Logo" alt="logo" /> */}
      Saikat
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={5}
        classNames={styles.NavAnimation}
        unmountOnExit
      >
        <nav className={styles.Nav}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className={styles.Burger}>
        <span role="img" aria-label="">
          {" "}
          🍔{" "}
        </span>
      </button>

    </header>
  );
}
