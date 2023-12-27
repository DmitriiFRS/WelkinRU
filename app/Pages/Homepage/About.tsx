import styles from "./homepage.module.scss";
import Image from "next/image";
import aboutImg from "../../../public/img/homepage/aboutImg.jpg";

function About() {
   return (
      <div className={styles.about}>
         <div className={`container ${styles.about__container}`}>
            <div className={styles.about__imgBody}>
               <Image src={aboutImg} alt="welkin" fill />
            </div>
            <div className={styles.about__titleBody}>
               <h2 className={styles.about__title}>О компании</h2>
               <p className={styles.about__subtitle}>
                  Welkin Company – Ваш надежный партнёр в сфере бытовой техники в Узбекистане! Наша компания была
                  основана на принципах качества, надежности и профессионализма, и с тех пор мы стремимся делать
                  повседневную жизнь наших клиентов более комфортной и эффективной.
               </p>
               <button className={styles.about__btn}>Подробнее</button>
            </div>
         </div>
      </div>
   );
}
export default About;
