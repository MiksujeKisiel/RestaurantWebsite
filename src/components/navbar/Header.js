import React, { useEffect, useState } from "react";
import {useScroll} from '../../hooks/ScrollHook'
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Icon from "../../assets/phone.svg";
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./navbar.module.scss";
import { Link } from "gatsby";
const Header = () => {
    const { isScrolled } = useScroll()

    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: 300,
        height: 300,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

   
    return (
        <header className={`${styles.header} ${isScrolled ? styles.isScrolled : ''}`}>
            <div className={styles.content}>
            <StaticImage className={styles.logo} placeholder="blurred" src="../../images/logo.webp" alt="wee"  />

             
            <nav  className={`${styles.nav} ${
                        menuOpen && size.width < 768 ? styles.isMenu : ""
                    }`}>
                      
  <div className={styles.linkWrapper}>
  <Link className={styles.link} to="/">
  Home
  </Link>
  <Link className={styles.link}  to="/menu">
  Menu
  </Link>
  <Link className={styles.link} to="/about">
  About
  </Link>
  <Link className={styles.link} to="/contact">
  Contact
  </Link>
  </div>

  <div className={styles.rightSection}>
  <Link className={`${styles.bookTableButton} ${isScrolled ? styles.isScrolled : ''}`}>Book table</Link>
  <button className={styles.menuButton}><Icon className={styles.icon}/>+10 (78) 783 3674</button>

  </div>

</nav>
                <div className={styles.toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;