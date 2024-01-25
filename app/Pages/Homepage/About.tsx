import styles from "./homepage.module.scss";
import Image from "next/image";
import aboutImg from "../../../public/img/homepage/aboutImg.jpg";
import Link from "next/link";

type Props = {
   data: {
      title: string;
      description: string;
   };
};

function About({ data }: Props) {
   return (
      <div className={styles.about}>
         <div className={`container ${styles.about__container}`}>
            <div className={styles.about__imgBody}>
               <Image src={aboutImg} alt="welkin" fill />
            </div>
            <div className={styles.about__titleBody}>
               <h2 className={styles.about__title}>{data.title}</h2>
               <p className={styles.about__subtitle}>{data.description}</p>
               <Link href={"/about"} className={styles.about__btn}>
                  Подробнее
               </Link>
            </div>
         </div>
      </div>
   );
}
export default About;
