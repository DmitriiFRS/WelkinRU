import styles from "../faq.module.scss";

type DataInner = {
   id: number;
   attributes: {
      question: string;
      answer: string;
      answer2: string | null;
      answer3: string | null;
      answer4: string | null;
      answer5: string | null;
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
                     <h3 className={styles.answer__question}>{el.attributes.question}</h3>
                     <p className={styles.answer__answer}>{el.attributes.answer}</p>
                     {el.attributes.answer2 && <p className={styles.answer__answer}>{el.attributes.answer2}</p>}
                     {el.attributes.answer3 && <p className={styles.answer__answer}>{el.attributes.answer3}</p>}
                     {el.attributes.answer4 && <p className={styles.answer__answer}>{el.attributes.answer4}</p>}
                     {el.attributes.answer5 && <p className={styles.answer__answer}>{el.attributes.answer5}</p>}
                  </div>
               );
            }
         })}
      </div>
   );
}
export default Answer;
