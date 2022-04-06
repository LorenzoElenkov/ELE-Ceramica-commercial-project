import React from "react";
import logo from '../../logo/logo.png';

import styles from './Header.module.css';

const Header = props => {
    

    return(
        <header className={props.isScrolled ? styles.scrolled : null}>
            <a href="/" className={styles.aLogo}>PORCELANOSA &nbsp;&nbsp;&nbsp; Grupo <span id={styles.spanHeader}> &nbsp; by &nbsp;</span><img srcSet={logo} alt="Ele Ceramica" className={styles.eleImg}></img></a>
            <div className={styles.buttons}>
                <button id="ele-ceramica" onClick={(e) => {props.clicked(e.target.id)}}>ELE Ceramica</button>
                <button id="contact-us" onClick={(e) => {props.clicked(e.target.id)}}>Contact</button>
                <button id="lang" onClick={(e) => {props.clicked(e.target.id)}}>EN</button>
            </div>
        </header>
    )
}
export default Header;