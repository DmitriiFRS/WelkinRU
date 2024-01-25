import Link from "next/link";
import styles from "./faq.module.scss";
import { useState } from "react";

type ColsInner = {
   id: number;
   title: string;
   answer: string;
};

type ColsProps = Array<ColsInner>;
function Col({ cols, el }: { cols: ColsProps; el: any }) {
   return (
      <Link href={"/"} key={el.id} className={styles.faq__item}>
         <div className={styles.faq__itemBody}>
            <div className={styles.faq__itemTitle}>{el.title}</div>
         </div>
      </Link>
   );
}
export default Col;
