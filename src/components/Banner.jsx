import { React, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import style from '../styles/Banner.module.css';

const Banner = () => {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
          strings: ["Web Developer", "Web Designer"],
          startDelay: 300,
          typeSpeed: 80,
          backSpeed: 100,
          backDelay: 1000,
          smartBackspace: false,
          loop: true,
          showCursor: true,
          cursorChar: "I"
        });
    
        return () => {
            typed.destroy();
        };
    }, []);
  
    return (
      <>
        <div className={style.container}>
            <div className={style.text}>
                Hi. I'm Sukhrob Ravshanov <br /> <span ref={el}></span>
            </div>
            <div className={style.img}>
                <img src="images/avatar.png" alt="Sukhrob Ravshanov" />
            </div>
            <img src="images/scroll-icon-animation.gif" alt="scroll" className={style.scroll} />
        </div>
      </>
  );
};

export default Banner;
