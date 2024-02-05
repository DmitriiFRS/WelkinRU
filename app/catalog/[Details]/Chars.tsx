import styles from "../catalog.module.scss";
import { DataType } from "./DetailsBody";

type Props = {
   el: DataType | null;
};

function Chars({ el }: Props) {
   return (
      el && (
         <div className={styles.chars}>
            <h3 className={styles.chars__title}>Характеристики</h3>
            <ul className={styles.chars__body}>
               <li className={styles.chars__item}>
                  <div className={styles.chars__item__title}>Серия оборудования</div>
                  <div className={styles.chars__item__value}>{el.attributes.Name}</div>
               </li>
               <li className={styles.chars__item}>
                  <div className={styles.chars__item__title}>Тип</div>
                  <div className={styles.chars__item__value}>{el.attributes.Type}</div>
               </li>
               <li className={styles.chars__item}>
                  <div className={styles.chars__item__title}>Размер</div>
                  <div className={styles.chars__item__value}>{el.attributes.Size}</div>
               </li>
               <li className={styles.chars__item}>
                  <div className={styles.chars__item__title}>HP</div>
                  <div className={styles.chars__item__value}>{el.attributes.Heat_Output}</div>
               </li>
            </ul>
         </div>
      )
   );
}
export default Chars;
