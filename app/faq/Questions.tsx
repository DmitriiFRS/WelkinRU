import styles from "./faq.module.scss";
import arrow from "../../public/img/faq/arrow.svg";
import Image from "next/image";

const cols = [
   {
      id: 0,
      title: "Как сменить город для осуществления покупок?",
      answer: "",
   },
   {
      id: 1,
      title: "Почему недоступен самовывоз выбранного товара?",
      answer: "",
   },
   {
      id: 2,
      title: "Каковы преимущества использования чиллеров Carrier по сравнению с другими брендами и моделями чиллеров?",
      answer: "",
   },
   {
      id: 3,
      title: "Какие технологии используются в чиллерах Carrier для обеспечения эффективности?",
      answer: "",
   },
   {
      id: 4,
      title: "Почему недоступна доставка выбранного товара?",
      answer: "",
   },
   {
      id: 5,
      title: "Какова продолжительность жизни чиллеров Carrier и какие факторы могут повлиять на их долговечность?",
      answer: "",
   },
];

function Questions() {
   return (
      <section className={styles.faq__questions}>
         <h2 className={styles.faq__title}>Часто задаваемые вопросы</h2>
         <ul className={styles.faq__cols}>
            {cols.map((el) => {
               return (
                  <li key={el.id} className={styles.faq__item}>
                     <div className={styles.faq__itemTitle}>{el.title}</div>
                     <div className={styles.faq__iconBody}>
                        <Image src={arrow} alt="arrow" fill />
                     </div>
                  </li>
               );
            })}
         </ul>
      </section>
   );
}
export default Questions;
