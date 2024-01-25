import Link from "next/link";
import styles from "./homepage.module.scss";
import Image from "next/image";

async function Preview({ data }: any) {
   return (
      <div className={styles.preview}>
         <div className={`container ${styles.preview__container}`}>
            <div className={styles.preview__titleBody}>
               <h1 className={styles.preview__title}>{data.data.attributes.title}</h1>
               <p className={styles.preview__subtitle}>{data.data.attributes.description}</p>
               <Link href={"/catalog"} className={`${styles.preview__btn} btnBlack`}>
                  <span>перейти в каталог</span>
               </Link>
            </div>
            <div className={styles.preview__imagesBody}>
               <div className={styles.preview__imgBody}>
                  <Image src={data.data.attributes.image.data.attributes.url} alt="vrf-v6" fill />
               </div>
            </div>
         </div>
      </div>
   );
}
export default Preview;
