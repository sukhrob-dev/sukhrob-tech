import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import style from "../styles/About.module.css";

const About = () => {
  return (
      <div className={style.container}>
        <div className={style.heading}>
            <h2>About</h2>
        </div>
        <div className={style.aboutWrapper}>
            <div className={style.left}>
                <p className={style.subHeading}>A little about me</p>
                <p>I'm Sukhrob Ravshanov. I was born in 2001 in Uzbekistan which is located Central Asia. I study at Samarkand Institute of Economics and Service as Marketer (Marketing department). I'm front-end developer and UI/UX designer.</p>
                <p className={style.subHeading}>What Can I do?</p>
                <div className={style.info}>
                    <div className={style.languages}>
                        <p>Languages I speak :)</p>
                        <div className={style.tech}>
                            <div className={style.techName}>
                                <p>HTML 5</p>
                                <p>95 %</p>
                            </div>
                            <div className={style.percent} type="95"></div>
                        </div>
                        <div className={style.tech}>
                            <div className={style.techName}>
                                <p>CSS 3</p>
                                <p>82 %</p>
                            </div>
                            <div className={style.percent + ' ' + style.percent1}></div>
                        </div>
                        <div className={style.tech}>
                            <div className={style.techName}>
                                <p>Bootstrap 4</p>
                                <p>68 %</p>
                            </div>
                            <div className={style.percent + ' ' + style.percent2}></div>
                        </div>
                        <div className={style.tech}>
                            <div className={style.techName}>
                                <p>Sass</p>
                                <p>72 %</p>
                            </div>
                            <div className={style.percent + ' ' + style.percent3}></div>
                        </div>
                        <div className={style.tech}>
                            <div className={style.techName}>
                                <p>Javascript</p>
                                <p>59 %</p>
                            </div>
                            <div className={style.percent + ' ' + style.percent4}></div>
                        </div>
                        <div className={style.tech}>
                            <div className={style.techName}>
                                <p>React js</p>
                                <p>55 %</p>
                            </div>
                            <div className={style.percent + ' ' + style.percent5}></div>
                        </div>
                    </div>
                    <div className={style.design}>
                        <p>For Drawing :)</p>
                        <img src="images/figma.png" alt="logo of figma" />
                        <img src="images/xd.png" alt="logo of xd" />
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.img}>
                    <img src="images/about.png" alt="Sukhrob Ravshanov" />
                </div>
                <div className={style.social}>
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
                <a href="/" className={style.btn}>Download CV</a>
            </div>
        </div>
        <div className={style.footer}>
            <span>Copyright &copy; 2022. All Rights Reserved. This site was made by </span>
            <a href="https://www.facebook.com/sukhrob.ravshanov.9">Sukhrob Ravshanov</a>
        </div>
      </div>
  );
};

export default About;
