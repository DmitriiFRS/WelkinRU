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
               <ul></ul>
            </div>
            <div className={styles.footer__cols__item}>
               <h3>Контакты</h3>
               <ul></ul>
            </div>
            <div className={styles.footer__cols__item}>
               <h3>Соц сети</h3>
               <ul></ul>
            </div>
         </div>
      </div>
   );
}
export default Footer;
