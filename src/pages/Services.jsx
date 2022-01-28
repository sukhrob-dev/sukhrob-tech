import style from "../styles/ServicesPage.module.css";
import Footer from "../components/Footer";
import { BsCodeSlash } from "react-icons/bs";
import { RiPaintBrushLine, RiVideoLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className={style.container}>
        <div className={style.heading}>
            <h2>Pricing and Services</h2>
        </div>
        <div className={style.cards}>
            <div className={style.card}>
                <div className={style.icon}>
                    <BsCodeSlash />
                </div>
                <h3>Creating Website</h3>
                <ul>
                    <li>- Responsive Website</li>
                    <li>- Creative Design</li>
                    <li>- User Friendly</li>
                    <li>- The Best SEO</li>
                </ul>
                <p className={style.prices}>Prices</p>
                <span className={style.price}>$100 - $3000</span>
                <a href="mailto: sukhrobphoto@gmail.com" className={style.btn}>ORDER NOW</a>
            </div>
            <div className={style.card}>
                <div className={style.icon}>
                    <RiPaintBrushLine />
                </div>
                <h3>UI/UX Design</h3>
                <ul>
                    <li>- Web and Mobile Design</li>
                    <li>- Creative Design</li>
                    <li>- User Experience</li>
                    <li>- User Friendly</li>
                </ul>
                <p className={style.prices}>Prices</p>
                <span className={style.price}>$50 - $1000</span>
                <a href="mailto: sukhrobphoto@gmail.com" className={style.btn}>ORDER NOW</a>
            </div>
            <div className={style.card}>
                <div className={style.icon}>
                    <RiVideoLine />
                </div>
                <h3>Video Production</h3>
                <ul>
                    <li>- Editing Videos</li>
                    <li>- Creative Ideas</li>
                    <li>- Expert Videographer</li>
                    <li>- 4k Quality</li>
                </ul>
                <p className={style.prices}>Prices</p>
                <span className={style.price}>$40 - $4000</span>
                <a href="mailto: sukhrobphoto@gmail.com" className={style.btn}>ORDER NOW</a>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Services;
