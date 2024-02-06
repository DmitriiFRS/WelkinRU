import styles from "./faq.module.scss";
import Col from "./Col";

type DataType = {
   id: number;
   attributes: {
      Question: string;
   };
};

function Questions({ data }: { data: Array<DataType> }) {
   return (
      <section className={styles.faq__questions}>
         <h2 className={styles.faq__title}>Часто задаваемые вопросы</h2>
         <ul className={styles.faq__cols}>
            {data.map((el) => {
               return <Col key={el.id} el={el.attributes.Question} id={el.id} />;
            })}
         </ul>
      </section>
   );
}
export default Questions;
