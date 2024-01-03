import styles from "./faq.module.scss";
import Cols from "./Cols";

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
         <Cols cols={cols} />
      </section>
   );
}
export default Questions;
