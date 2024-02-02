import Link from "next/link";
import styles from "./homepage.module.scss";
import Image from "next/image";

type RecommendedType = {
   id: number;
   attributes: {
      name: string;
      type: string;
      reference: string;
      image: {
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
   attributes: {
      name: string;
      type: string;
      reference: string;
      image: any;
   };
};
async function Recommended({ data }: { data: Array<Products> }) {
   return (
      <div className={styles.recommended}>
         <div className="container">
            <h2 className={styles.recommended__title}>Рекомендуем</h2>
            <ul className={styles.recommended__list}>
               {data.map((el: RecommendedType) => {
                  return (
                     <li key={el.id} className={styles.recommended__item}>
                        <Link href={`/catalog/${el.attributes.reference.replace(/\s|\//g, "_")}`}>
                           <div className={styles.recommended__cardBody}>
                              <div className={styles.recommended__imgBody}>
                                 <Image
                                    src={el.attributes.image.data.attributes.url}
                                    alt={el.attributes.name}
                                    fill
                                    objectFit="contain"
                                 />
                              </div>
                           </div>
                        </Link>
                        <p className={styles.recommended__model}>{el.attributes.name}</p>
                        <p className={styles.recommended__type}>{el.attributes.type}</p>
                        <Link
                           href={`/catalog/${el.attributes.reference.replace(/\s|\//g, "_")}`}
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
