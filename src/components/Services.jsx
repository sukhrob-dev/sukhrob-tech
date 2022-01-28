import style from '../styles/Services.module.css';

const Services = () => {

  return (
      <div className={style.container}>
          <div className={style.heading}>
              <h2>Services</h2>
          </div>
          <div className={style.gallery}>
            <div className={style.galleryItem}>
                <div className={style.img}>
                    <img src="images/responsive.png" alt="Responsive Design" />
                </div>
                <h3>Responsive Website</h3>
                <p>Coding</p>
            </div>
            <div className={style.galleryItem}>
                <div className={style.img}>
                    <img src="images/seo.png" alt="Search Engine Optimization" />
                </div>
                <h3>Good SEO</h3>
                <p>Marketing</p>
            </div>
            <div className={style.galleryItem}>
                <div className={style.img}>
                    <img src="images/design.png" alt="Creative Design" />
                </div>
                <h3>Creative Design</h3>
                <p>Design</p>
            </div>
            <div className={style.galleryItem}>
                <div className={style.img}>
                    <img src="images/production.png" alt="Photo and Video" />
                </div>
                <h3>Photography and Videography</h3>
                <p>Production</p>
            </div>
          </div>
      </div>
  );
};

export default Services;
