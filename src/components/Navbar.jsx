import style from "../styles/Navbar.module.css";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

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
                    <Link to="/" className={style.links}>Home</Link>
                </li>
                <li>
                    <Link to="/about" className={style.links}>About</Link>
                </li>
                <li>
                    <Link to="/contact" className={style.links}>Contact</Link>
                </li>
                <li>
                    <Link to="/services" className={style.links}>Pricing and Services</Link>
                </li>
            </ul>
            <RiMenu4Fill className={style.menu} onClick={iconClick} />
          </nav>
      </div>
  );
};

export default Navbar;
