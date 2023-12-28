import styles from "./homepage.module.scss";
import preview1 from "../../../public/img/homepage/preview1.jpg";
import preview2 from "../../../public/img/homepage/preview2.jpg";
import Image from "next/image";

function Preview() {
   return (
      <div className={styles.preview}>
         <div className={`container ${styles.preview__container}`}>
            <div className={styles.preview__titleBody}>
               <h1 className={styles.preview__title}>Вентиляция и система кондиционирования воздуха Welkin</h1>
               <p className={styles.preview__subtitle}>
                  Надежное и эффективное оборудование для кондиционирования воздуха от Welkin - это ключ к созданию
                  комфортной и здоровой атмосферы в любом помещении.
               </p>
               <button className={`${styles.preview__btn} btnBlack`}>
                  <span>перейти в каталог</span>
               </button>
            </div>
            <div className={styles.preview__imagesBody}>
               <div className={`${styles.preview__imgBody} ${styles.preview__img1}`}>
                  <Image src={preview1} alt="vrf-v6" fill />
               </div>
               <div className={`${styles.preview__imgBody} ${styles.preview__img2}`}>
                  <Image src={preview2} alt="chiller" fill />
               </div>
            </div>
         </div>
      </div>
   );
}
export default Preview;
