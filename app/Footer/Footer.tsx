import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "../../public/svg/logo.svg";

function Footer() {
   return (
      <div className={`container ${styles.footer}`}>
         <div className={styles.footer__logoBody}>
            <div className={styles.footer__logoImgBody}>
               <Image src={logo} alt="welkin" fill />
            </div>
            <p className={styles.footer__subtitle}>политика конфиденциальности</p>
         </div>
         <div className={styles.footer__cols}>
            <div className={styles.footer__cols__item}>
               <h3>Навигация</h3>
               <ul className={styles.footer__cols__list}>
                  <li className={styles.footer__cols__item}>каталог</li>
                  <li className={styles.footer__cols__item}>о компании</li>
                  <li className={styles.footer__cols__item}>вопрос-ответ</li>
               </ul>
            </div>
            <div className={styles.footer__cols__item}>
               <h3>Контакты</h3>
               <ul className={styles.footer__cols__list}>
                  <li className={styles.footer__cols__item}>+998 192 93 93</li>
                  <li className={`${styles.footer__cols__item} ${styles.footer__cols__itemMail}`}>
                     welkinru@gmail.com
                  </li>
               </ul>
            </div>
            <div className={styles.footer__cols__item}>
               <h3>Соц сети</h3>
               <ul className={styles.footer__cols__list}>
                  <li className={styles.footer__cols__item}>Telegram</li>
                  <li className={styles.footer__cols__item}>Instagram</li>
                  <li className={styles.footer__cols__item}>Facebook</li>
               </ul>
            </div>
         </div>
      </div>
   );
}
export default Footer;
