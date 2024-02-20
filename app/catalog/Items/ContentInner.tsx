import Link from "next/link";
import styles from "../catalog.module.scss";
import Image from "next/image";
import ItemsNotFound from "./ItemsNotFound";

type ItemType = {
   productCard: {
      title: string;
      type: Array<string>;
      href: string;
      image: any;
   };
};

type Props = Array<ItemType>;

function ContentInner({ items, isTransition }: { items: Props; isTransition: boolean }) {
   return (
      <ul className={`${styles.cards__body} ${isTransition ? styles.cards__body__inTransition : ""}`}>
         {items.length < 1 ? (
            <ItemsNotFound />
         ) : (
            items.map((el, index) => {
               return (
                  <li key={index} className={styles.cards__item}>
                     <Link
                        href={`/catalog/${el.productCard.href.replace(/\s|\//g, "_")}`}
                        className={styles.cards__item__imgBlock}
                     >
                        <div className={styles.cards__item__imgBody}>
                           <Image
                              src={el.productCard.image.node.sourceUrl}
                              alt="welkin"
                              fill
                              objectFit="contain"
                              quality={50}
                           />
                        </div>
                     </Link>
                     <div className={styles.cards__item__titleBlock}>
                        <div className={styles.cards__item__title}>{el.productCard.title}</div>
                        <div className={styles.cards__item__type}>{el.productCard.type}</div>
                     </div>
                     <Link
                        href={`/catalog/${el.productCard.href.replace(/\s|\//g, "_")}`}
                        className={`${styles.cards__item__btn} btnYellow`}
                     >
                        <span>Узнать цену</span>
                     </Link>
                  </li>
               );
            })
         )}
      </ul>
   );
}
export default ContentInner;
