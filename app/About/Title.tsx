import styles from "./about.module.scss";
import Image from "next/image";
import head from "../../public/img/about/aboutHead.jpg";

function Title() {
   return (
      <section className={styles.about__main}>
         <div className={styles.about__imgBody}>
            <Image src={head} alt="Welkin" fill />
         </div>
         <div className={styles.about__titleBody}>
            <h2 className={styles.about__title}>О компании</h2>
            <p className={styles.about__subtitle}>
               Welkin Company – Ваш надежный партнёр в сфере бытовой техники в Узбекистане! Наша компания была основана
               на принципах качества, надежности и профессионализма, и с тех пор мы стремимся делать повседневную жизнь
               наших клиентов более комфортной и эффективной. С Welkin ваш дом становится местом, где качество, комфорт
               и инновации соединяются, чтобы создать уютное и современное пространство для Вас и Ваших близких. Наша
               команда занимается кондиционированием и вентиляцией любой сложности и масштаба с 2008 года.
            </p>
         </div>
      </section>
   );
}
export default Title;
