import Link from "next/link";
import styles from "../catalog.module.scss";
import Image from "next/image";

type ItemType = {
   attributes: {
      name: string;
      type: string;
      reference: string;
      image: any;
   };
};

type Props = Array<ItemType>;

function ContentInner({ items, isTransition }: { items: Props; isTransition: boolean }) {
   return (
      <ul className={`${styles.cards__body} ${isTransition ? styles.cards__body__inTransition : ""}`}>
         {items.map((el, index) => {
            return (
               <li key={index} className={styles.cards__item}>
                  <Link
                     href={`/Catalog/${el.attributes.reference.replace(/\s|\//g, "_")}`}
                     className={styles.cards__item__imgBlock}
                  >
                     <div className={styles.cards__item__imgBody}>
                        <Image src={el.attributes.image.data.attributes.url} alt="welkin" fill objectFit="contain" />
                     </div>
                  </Link>
                  <div className={styles.cards__item__titleBlock}>
                     <div className={styles.cards__item__title}>{el.attributes.name}</div>
                     <div className={styles.cards__item__type}>{el.attributes.type}</div>
                  </div>
                  <Link
                     href={`/Catalog/${el.attributes.reference.replace(/\s|\//g, "_")}`}
                     className={`${styles.cards__item__btn} btnYellow`}
                  >
                     <span>Узнать цену</span>
                  </Link>
               </li>
            );
         })}
      </ul>
   );
}
export default ContentInner;
