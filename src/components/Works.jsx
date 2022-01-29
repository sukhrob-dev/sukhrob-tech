import style from '../styles/Works.module.css';
import { MdSearch } from "react-icons/md";

const Services = () => {
  return (
      <div className={style.container}>
          <div className={style.heading}>
              <h2>The latest works</h2>
          </div>
          <div className={style.gallery}>
            <div className={style.galleryItem}>
                <div className={style.img}>
                    <img src="images/maksadov.png" alt="Landing page" />
                    <a href="http://maksadov.netlify.app" target="_blank" rel="noreferrer">
                        <div className={style.opacity}>
                            <div>
                                <MdSearch />
                            </div>
                        </div>
                    </a>
                </div>
                <h3>Sanjarbek Maksadov</h3>
                <p>Category: Landing page</p>
            </div>
            <div className={style.galleryItem}>
                <div className={style.img}>
                    <img src="images/tesla.png" alt="Tesla Clone" />
                    <a href="http://tesla-uz.netlify.app" target="_blank" rel="noreferrer">
                        <div className={style.opacity}>
                            <div>
                                <MdSearch />
                            </div>
                        </div>
                    </a>
                </div>
                <h3>Tesla</h3>
                <p>Category: Industrial</p>
            </div>
            <div className={style.galleryItem}>
                <div className={style.img}>
                    <img src="images/marico.png" alt="Marico website" />
                    <a href="http://marico-app.netlify.app" target="_blank" rel="noreferrer">
                        <div className={style.opacity}>
                            <div>
                                <MdSearch />
                            </div>
                        </div>
                    </a>
                </div>
                <h3>Marico</h3>
                <p>Category: Music</p>
            </div>
            <div className={style.galleryItem}>
                <div className={style.img}>
                    <img src="images/template.png" alt="IT Consulting" />
                    <a href="http://consulting-uz.netlify.app" target="_blank" rel="noreferrer">
                        <div className={style.opacity}>
                            <div>
                                <MdSearch />
                            </div>
                        </div>
                    </a>
                </div>
                <h3>IT Company</h3>
                <p>Category: Consulting</p>
            </div>
          </div>
      </div>
  );
};

export default Services;
