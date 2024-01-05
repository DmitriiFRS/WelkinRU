import styles from "../catalog.module.scss";
import Image from "next/image";

type ContentInnerProps = {
   id: number;
   img: any;
   name: string;
   type: string;
};

function ContentInner({ items }: { items: Array<ContentInnerProps> }) {
   return (
      <ul className={styles.cards__body}>
         {items.map((el) => {
            return (
               <li key={el.id} className={styles.cards__item}>
                  <div className={styles.cards__item__imgBlock}>
                     <div className={styles.cards__item__imgBody}>
                        <Image src={el.img} alt="welkin" />
                     </div>
                  </div>
                  <div className={styles.cards__item__titleBlock}>
                     <div className={styles.cards__item__title}>{el.name}</div>
                     <div className={styles.cards__item__type}>{el.type}</div>
                  </div>
                  <button className={`${styles.cards__item__btn} btnYellow`}>
                     <span>Узнать цену</span>
                  </button>
               </li>
            );
         })}
      </ul>
   );
}
export default ContentInner;
