"use client";

import styles from "./faq.module.scss";

function Answer({ answer, isActive }: { answer: string; isActive: boolean }) {
   return (
      <div className={`${styles.faq__answer} ${isActive ? styles.faq__answer__active : ""}`}>
         <div className={styles.faq__answerBody}></div>
         <p className={`${styles.faq__answer__title} ${isActive ? styles.faq__answer__title__active : ""}`}>
            Доставка может быть недоступна, если выбранный товар доступен только под заказ или модель снята с
            производства.
         </p>
      </div>
   );
}
export default Answer;
