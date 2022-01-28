import { MdEmail, MdPhone } from "react-icons/md";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
      <div className={style.container}>
          <div className={style.top}>
            <a href="/" className={style.img}>
                <img src="images/logo.png" alt="Sukhrob Tech logo" />
            </a>
            <div className={style.info}>
                <p><MdEmail /> sukhrobphoto@gmail.com</p>
                <p><MdPhone /> + 998 99 666 - 06 - 51</p>
            </div>
            <div className={style.social}>
                <p>Social Networks</p>
                <div className={style.socialIcons}>
                    <a href="https://www.t.me/sukhrob_ravshanov" className={style.icon}>
                        <FaTelegramPlane />
                    </a>
                    <a href="https://www.youtube.com/channel/UCjuqGzqjnDLXrDUQkC1vx_g" className={style.icon}>
                        <FaYoutube />
                    </a>
                    <a href="https://www.instagram.com/sukhrob_ravshanoff" className={style.icon}>
                        <FaInstagram />
                    </a>
                </div>
            </div>
          </div>
          <div className={style.bottom}>
            <span>Copyright &copy; 2022. All Rights Reserved. This site was made by </span>
            <a href="https://www.facebook.com/sukhrob.ravshanov.9">Sukhrob Ravshanov</a>
          </div>
      </div>
  );
};

export default Footer;
