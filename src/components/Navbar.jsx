import style from "../styles/Navbar.module.css";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const iconClick = () => {
        menu ? setMenu(false) : setMenu(true)
    }

  return (
      <div className={style.container}>
          <nav className={style.navbar}>
            <a href="/" className={style.logo}>
                <img src="images/logo.png" alt="logo of Sukhrob Tech" />
            </a>
            <ul className={`${style.list} ${menu ? style.active : ""}`}>
                <li>
                    <a href="/" className={style.links}>Home</a>
                </li>
                <li>
                    <a href="/about" className={style.links}>About</a>
                </li>
                <li>
                    <a href="/contact" className={style.links}>Contact</a>
                </li>
                <li>
                    <a href="/services" className={style.links}>Pricing and Services</a>
                </li>
            </ul>
            <RiMenu4Fill className={style.menu} onClick={iconClick} />
          </nav>
      </div>
  );
};

export default Navbar;
