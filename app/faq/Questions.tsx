import styles from "./faq.module.scss";
import Col from "./Col";

type DataType = {
   id: string;
   qa: {
      id: number;
      question: string;
   };
};

function Questions({ data }: { data: Array<DataType> }) {
   return (
      <section className={styles.faq__questions}>
         <h2 className={styles.faq__title}>Часто задаваемые вопросы</h2>
         <ul className={styles.faq__cols}>
            {data.map((el) => {
               return <Col key={el.id} el={el.qa.question} id={el.qa.id} />;
            })}
         </ul>
      </section>
   );
}
export default Questions;
