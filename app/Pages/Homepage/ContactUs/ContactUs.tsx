import styles from "../homepage.module.scss";
import Inputs from "./Inputs";

function ContactUs() {
   return (
      <div className={styles.contactUs}>
         <div className={`container ${styles.contactUs__container}`}>
            <div className={styles.contactUs__titleBody}>
               <h2 className={styles.contactUs__title}>Свяжитесь с нами</h2>
               <p className={styles.contactUs__subtitle}>
                  Наши опытные специалисты готовы взять на себя решение любой задачи с оборудованием Welkin. Мы
                  гарантируем, что вы получите оптимальное решение, отвечающее вашим потребностям и бюджету.
               </p>
            </div>
            <Inputs />
         </div>
      </div>
   );
}
export default ContactUs;
