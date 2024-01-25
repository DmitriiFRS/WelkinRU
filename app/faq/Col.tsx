import Link from "next/link";
import styles from "./faq.module.scss";

type Props = {
   el: {
      id: number;
      attributes: {
         question: string;
      };
   };
};

function Col({ el, id }: { el: string; id: number }) {
   return (
      <Link href={"faq/"} className={styles.faq__item}>
         <div className={styles.faq__itemBody}>
            <div className={styles.faq__itemTitle}>{el}</div>
         </div>
      </Link>
   );
}
export default Col;
