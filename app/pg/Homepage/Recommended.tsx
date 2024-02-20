import Link from "next/link";
import styles from "./homepage.module.scss";
import Image from "next/image";

type RecommendedType = {
   id: number;
   attributes: {
      Name: string;
      Type: string;
      Reference: string;
      Image: {
         data: {
            attributes: {
               url: string;
            };
         };
      };
   };
};
type Products = {
   id: number;
   productRecommended: {
      name: string;
      type: string;
      href: string;
      Image: any;
   };
};
async function Recommended({ data }: { data: Array<Products> }) {
   return (
      <div className={styles.recommended}>
         <div className="container">
            <h2 className={styles.recommended__title}>Рекомендуем</h2>
            <ul className={styles.recommended__list}>
               {data.map((el: any) => {
                  return (
                     <li key={el.id} className={styles.recommended__item}>
                        <Link href={`/catalog/${el.productRecommended.href.replace(/\s|\//g, "_")}`}>
                           <div className={styles.recommended__cardBody}>
                              <div className={styles.recommended__imgBody}>
                                 <Image
                                    src={el.productRecommended.image.node.sourceUrl}
                                    alt={el.productRecommended.name}
                                    fill
                                    objectFit="contain"
                                 />
                              </div>
                           </div>
                        </Link>
                        <p className={styles.recommended__model}>{el.productRecommended.name}</p>
                        <p className={styles.recommended__type}>{el.productRecommended.type}</p>
                        <Link
                           href={`/catalog/${el.productRecommended.href.replace(/\s|\//g, "_")}`}
                           className={styles.recommended__btn}
                        >
                           <span>Узнать цену</span>
                        </Link>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
}
export default Recommended;
