import styles from "./homepage.module.scss";
import Image from "next/image";

type RecommendedType = {
   id: number;
   attributes: {
      name: string;
      description: string;
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
      description: string;
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
                        <div className={styles.recommended__cardBody}>
                           <div className={styles.recommended__imgBody}>
                              <Image
                                 src={"http://localhost:1337" + el.attributes.image.data.attributes.url}
                                 alt={el.attributes.name}
                                 fill
                              />
                           </div>
                        </div>
                        <p className={styles.recommended__model}>{el.attributes.name}</p>
                        <p className={styles.recommended__type}>{el.attributes.description}</p>
                        <button className={styles.recommended__btn}>
                           <span>Узнать цену</span>
                        </button>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
}
export default Recommended;
