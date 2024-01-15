import Link from "next/link";
import styles from "../catalog.module.scss";
import Image from "next/image";

type ItemType = {
   attributes: {
      name: string;
      description: string;
      reference: string;
      image: any;
   };
};

type Props = Array<ItemType>;

function ContentInner({ items }: { items: Props }) {
   return (
      <ul className={styles.cards__body}>
         {items.map((el, index) => {
            console.log(el.attributes.image.data.attributes.url);
            return (
               <li key={index} className={styles.cards__item}>
                  <Link
                     href={`/Catalog/${el.attributes.reference.replace(/\s|\//g, "_")}`}
                     className={styles.cards__item__imgBlock}
                  >
                     <div className={styles.cards__item__imgBody}>
                        <Image
                           src={"http://localhost:1337" + el.attributes.image.data.attributes.url}
                           alt="welkin"
                           fill
                        />
                     </div>
                  </Link>
                  <div className={styles.cards__item__titleBlock}>
                     <div className={styles.cards__item__title}>{el.attributes.name}</div>
                     <div className={styles.cards__item__type}>{el.attributes.description}</div>
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
