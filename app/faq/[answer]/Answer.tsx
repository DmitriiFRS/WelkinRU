import styles from "../faq.module.scss";

type DataInner = {
   id: number;
   attributes: {
      Question: string;
      Answer: string;
      Answer2: string | null;
      Answer3: string | null;
      Answer4: string | null;
      Answer5: string | null;
   };
};

type Props = {
   data: Array<DataInner>;
   answer: string;
};

function Answer({ data, answer }: Props) {
   return (
      <div className={styles.answer__body}>
         <h2 className={styles.answer__title}>Часто задаваемые вопросы</h2>
         {data.map((el) => {
            if (el.id.toString() === answer) {
               return (
                  <div className={styles.answer__item} key={el.id}>
                     <h3 className={styles.answer__question}>{el.attributes.Question}</h3>
                     <p className={styles.answer__answer}>{el.attributes.Answer}</p>
                     {el.attributes.Answer2 && <p className={styles.answer__answer}>{el.attributes.Answer2}</p>}
                     {el.attributes.Answer3 && <p className={styles.answer__answer}>{el.attributes.Answer3}</p>}
                     {el.attributes.Answer4 && <p className={styles.answer__answer}>{el.attributes.Answer4}</p>}
                     {el.attributes.Answer5 && <p className={styles.answer__answer}>{el.attributes.Answer5}</p>}
                  </div>
               );
            }
         })}
      </div>
   );
}
export default Answer;
