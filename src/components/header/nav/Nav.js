import { useState, useEffect } from "react";
import Styles from "../../../styles/App.module.scss";
import ATCLOGO from "../../../assets/desktop/ATCLOGO.svg"
import logoMenu from "../../../assets/icon-hamburger.svg";
import DataJson from "../../../data/data.json";

const Nav = () => {
    const navbarData = DataJson.navbarComponent;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const [Navbar, setNavbar] = useState(false)
    useEffect(() => {
        changeBackground()
        // adding the event when scroll change Logo
        window.addEventListener("scroll", changeBackground)
    })
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 720 && window.scrollY < 2200) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    return (
        <nav className={Navbar ? Styles.nav : Styles.navi}>
            <div className={Styles.nav_mobile}>
                <div className={Styles.nav_logo}>
                    <img src={ATCLOGO} alt="logo" />
                </div>
                <div className={Styles.nav_menu_mobile}>
                    <button type="button" onClick={toggleMenu}><img className="bgm" src={logoMenu} alt="hamburger menu" /></button>
                </div>
            </div>
            <ul className={`${Styles.nav_list} ${isOpen ? Styles.nav_list_show : ""}`}>
                {navbarData.map((data, i) => {
                    return (
                        <li key={i}><a href={data.link}>{data.name}</a></li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;