import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "../../public/svg/logo.svg";
import Link from "next/link";
import { fetchGraphqlData } from "../Utilities/FetchData";

type SocialInner = {
   id: number;
   attributes: {
      name: string;
      href: string;
   };
};

type FooterData = {
   data: {
      phone: {
         data: {
            attributes: {
               Footer: string;
            };
         };
      };
      footerSocials: {
         data: Array<SocialInner>;
      };
   };
};

async function Footer() {
   const data: FooterData = await fetchGraphqlData(`
   query {
      phone {
        data {
          attributes {
            Footer
          }
        }
      }
      footerSocials {
         data {
         id
           attributes {
             name
             href
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
                     <li className={styles.footer__cols__item}>
                        <Link className={styles.footer__cols__itemBody} href={"/catalog"}>
                           каталог
                        </Link>
                     </li>
                     <li className={styles.footer__cols__item}>
                        <Link className={styles.footer__cols__itemBody} href={"/about"}>
                           о компании
                        </Link>
                     </li>
                     <li className={styles.footer__cols__item}>
                        <Link className={styles.footer__cols__itemBody} href={"/faq"}>
                           вопрос-ответ
                        </Link>
                     </li>
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
                     {data.data.footerSocials.data.map((el) => {
                        return (
                           <li key={el.id} className={styles.footer__cols__item}>
                              <Link className={styles.footer__cols__itemLink} href={el.attributes.href}>
                                 {el.attributes.name}
                              </Link>
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>
         </div>
      )
   );
}
export default Footer;

// <li className={styles.footer__cols__item}>Telegram</li>
