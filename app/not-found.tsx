import styles from "./page.module.scss";
import errorImg from "../public/img/404.png";
import Image from "next/image";
import Link from "next/link";

function error404() {
   return (
      <div className={styles.error}>
         <div className={`container ${styles.error__container}`}>
            <div className={styles.error__imgBody}>
               <Image src={errorImg} alt="Страница не найдена" fill />
            </div>
            <div className={styles.error__titleBody}>
               <h2 className={styles.error__title}>Страница не найдена</h2>
               <div className={styles.error__subtitle}>
                  Неправильно набран адрес <br /> или такой страницы не существует
               </div>
            </div>
            <div className={styles.error__btnsBody}>
               <Link href={"/"} className={`${styles.error__btn} btnBlack`}>
                  <span>Перейти на главную</span>
               </Link>
               <Link href={"/catalog"} className={`${styles.error__btn} btnYellow`}>
                  <span>Вернуться в каталог</span>
               </Link>
            </div>
         </div>
      </div>
   );
}
export default error404;
