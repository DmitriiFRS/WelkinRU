import styles from "../catalog.module.scss";
import { DataType } from "./DetailsBody";

type Props = {
   item: DataType | null;
};

function Chars({ item }: Props) {
   return (
      item && (
         <div className={styles.chars}>
            <h3 className={styles.chars__title}>Характеристики</h3>
            <ul className={styles.chars__body}>
               <li className={styles.chars__item}>
                  <div className={styles.chars__item__title}>Серия оборудования</div>
                  <div className={styles.chars__item__value}>{item.attributes.name}</div>
               </li>
               <li className={styles.chars__item}>
                  <div className={styles.chars__item__title}>Тип</div>
                  <div className={styles.chars__item__value}>{item.attributes.type}</div>
               </li>
               <li className={styles.chars__item}>
                  <div className={styles.chars__item__title}>Размер</div>
                  <div className={styles.chars__item__value}>{item.attributes.Voltage}</div>
               </li>
               <li className={styles.chars__item}>
                  <div className={styles.chars__item__title}>HP</div>
                  <div className={styles.chars__item__value}>{item.attributes.HP}</div>
               </li>
            </ul>
         </div>
      )
   );
}
export default Chars;
