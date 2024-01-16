import styles from "./homepage.module.scss";

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
            <div className={styles.contactUs__inputsBody}>
               <input className={styles.contactUs__input} placeholder="ваше имя" type="text" />
               <input className={styles.contactUs__input} placeholder="ваш телефон" type="tel" />
               <textarea name="textarea" placeholder="ваш вопрос" className={styles.contactUs__inputArea}></textarea>
               <button className={`${styles.contactUs__btn} btnBlack`}>
                  <span>Отправить</span>
               </button>
            </div>
         </div>
      </div>
   );
}
export default ContactUs;
