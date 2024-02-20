import styles from "../faq.module.scss";

type DataInner = {
   id: string;
   qa: {
      id: number;
      question: string;
      answer: string;
      answer2: string | null;
      answer3: string | null;
      answer4: string | null;
   };
};

type Props = {
   data: Array<DataInner>;
   answer: string;
};

function Answer({ data, answer }: Props) {
   console.log(answer);
   return (
      <div className={styles.answer__body}>
         <h2 className={styles.answer__title}>Часто задаваемые вопросы</h2>
         {data.map((el) => {
            if (el.qa.id.toString() === answer) {
               return (
                  <div className={styles.answer__item} key={el.id}>
                     <h3 className={styles.answer__question}>{el.qa.question}</h3>
                     <p className={styles.answer__answer}>{el.qa.answer}</p>
                     {el.qa.answer2 && <p className={styles.answer__answer}>{el.qa.answer2}</p>}
                     {el.qa.answer3 && <p className={styles.answer__answer}>{el.qa.answer3}</p>}
                     {el.qa.answer4 && <p className={styles.answer__answer}>{el.qa.answer4}</p>}
                  </div>
               );
            }
         })}
      </div>
   );
}
export default Answer;
