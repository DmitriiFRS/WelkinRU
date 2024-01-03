import styles from "./faq.module.scss";
import Image from "next/image";
import arrow from "../../public/img/faq/arrow.svg";
import { useState } from "react";
import Answer from "./Answer";

type ColsInner = {
   id: number;
   title: string;
   answer: string;
};

type ColsProps = Array<ColsInner>;
function Col({ cols, el }: { cols: ColsProps; el: any }) {
   const [isActive, setActive] = useState(false);
   return (
      <li key={el.id} className={styles.faq__item} onClick={() => setActive(!isActive)}>
         <div className={styles.faq__itemBody}>
            <div className={styles.faq__itemTitle}>{el.title}</div>
            <div className={styles.faq__iconBody}>
               <Image src={arrow} alt="arrow" fill />
            </div>
         </div>
         <Answer answer={el.answer} isActive={isActive} />
      </li>
   );
}
export default Col;
