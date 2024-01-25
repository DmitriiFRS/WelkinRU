"use client";

import styles from "./faq.module.scss";
import Col from "./Col";

type ColsInner = {
   id: number;
   title: string;
   answer: string;
};

type ColsProps = Array<ColsInner>;

function Cols({ cols }: { cols: ColsProps }) {
   return (
      <ul className={styles.faq__cols}>
         {cols.map((el, index) => {
            return <Col key={index} cols={cols} el={el} />;
         })}
      </ul>
   );
}
export default Cols;
