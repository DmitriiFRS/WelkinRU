import Link from "next/link";
import styles from "./faq.module.scss";

function Col({ el, id }: { el: string; id: number }) {
   return (
      <Link href={id.toString()} className={styles.faq__item}>
         <div className={styles.faq__itemBody}>
            <div className={styles.faq__itemTitle}>{el}</div>
         </div>
      </Link>
   );
}
export default Col;
