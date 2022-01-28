import style from "../styles/Contact.module.css";
import Footer from "../components/Footer";

const Contact = () => {
  return (
      <div className={style.container}>
          <div className={style.heading}>
              <h2>Contact me</h2>
          </div>
          <form action="mailto:sukhrobphoto@gmail.com" className={style.form}>
              <div className={style.flex}>
                <input
                    type="text"
                    placeholder="Full name*" 
                    className={style.input}
                />
                <input 
                    type="email"
                    placeholder="Your email*" 
                    className={style.input}
                />
              </div>
              <textarea 
                cols="30" 
                rows="10"
                placeholder="Your message*"    
            ></textarea>
            <div className={style.buttons}>
                <input type="reset" value="RESET" />
                <input type="submit" value="SEND" />
            </div>
          </form>
          <Footer />
      </div>
  );
};

export default Contact;
