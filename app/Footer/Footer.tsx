import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "../../public/svg/logo.svg";
import Link from "next/link";
import { fetchGraphqlData } from "../Utilities/FetchData";

async function Footer() {
   const data = await fetchGraphqlData(`
   query {
      phone {
        data {
          attributes {
            Footer
          }
        }
      }
    }
   `);

   return (
      data.data.phone.data.attributes.Footer && (
         <div className={`container ${styles.footer}`}>
            <div className={styles.footer__logoBody}>
               <Link href={"/"}>
                  <div className={styles.footer__logoImgBody}>
                     <Image src={logo} alt="welkin" fill />
                  </div>
               </Link>
               <Link href={"/Privacy-policy"}>
                  <div className={styles.footer__subtitle}>политика конфиденциальности</div>
               </Link>
            </div>
            <div className={styles.footer__cols}>
               <div className={styles.footer__cols__items}>
                  <h3 className={styles.footer__cols__title}>Навигация</h3>
                  <ul className={styles.footer__cols__list}>
                     <Link className={styles.footer__cols__itemBody} href={"/catalog"}>
                        <li className={styles.footer__cols__item}>каталог</li>
                     </Link>
                     <Link className={styles.footer__cols__itemBody} href={"/about"}>
                        <li className={styles.footer__cols__item}>о компании</li>
                     </Link>
                     <Link className={styles.footer__cols__itemBody} href={"/faq"}>
                        <li className={styles.footer__cols__item}>вопрос-ответ</li>
                     </Link>
                  </ul>
               </div>
               <div className={styles.footer__cols__items}>
                  <h3 className={styles.footer__cols__title}>Контакты</h3>
                  <ul className={styles.footer__cols__list}>
                     <li className={styles.footer__cols__item}>{data.data.phone.data.attributes.Footer}</li>
                     <li className={`${styles.footer__cols__item} ${styles.footer__cols__itemMail}`}>
                        welkinru@gmail.com
                     </li>
                  </ul>
               </div>
               <div className={styles.footer__cols__items}>
                  <h3 className={styles.footer__cols__title}>Соц сети</h3>
                  <ul className={styles.footer__cols__list}>
                     <li className={styles.footer__cols__item}>Telegram</li>
                  </ul>
               </div>
            </div>
         </div>
      )
   );
}
export default Footer;
