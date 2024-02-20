import styles from "../catalog.module.scss";
import Image from "next/image";
import Chars from "./Chars";

export type DataType = {
   productCard: {
      title: string;
      type: string;
      href: string;
      heatOutput: string | null;
      coolingOutput: string | null;
      description: string | null;
      description2: string | null;
      description3: string | null;
      size: string | null;
      subtype: string;
      image: any;
   };
};

type Props = {
   el: DataType;
   decodedPhoneNumber: string;
};

async function DetailsBody({ el, decodedPhoneNumber }: Props) {
   return (
      <>
         <div className={styles.details}>
            <div className={styles.details__main}>
               <div className={`${styles.cards__item__imgBlock} ${styles.cards__item__imgBlock__item}`}>
                  <div className={`${styles.cards__item__imgBody} ${styles.cards__item__imgBody__item}`}>
                     <Image src={el.productCard.image.node.sourceUrl} alt="welkin" fill objectFit="contain" />
                  </div>
               </div>
               <div className={styles.details__mainParamsBody}>
                  <div className={styles.details__name}>{el.productCard.title}</div>
                  <div className={styles.details__mainParams}>
                     <div className={styles.details__mainParam}>
                        Теплопроизводительность, Квт:<span>{el.productCard.heatOutput}</span>
                     </div>
                     <div className={styles.details__mainParam}>
                        Холодопроизводительность, Квт:
                        <span>{el.productCard.coolingOutput}</span>
                     </div>
                  </div>
                  <a href={"tel://" + decodedPhoneNumber} className={`${styles.details__item__btn} btnYellow`}>
                     <span>Узнать цену</span>
                  </a>
               </div>
            </div>
            <div className={styles.details__titleBody}>
               <h3 className={styles.details__title}>Описание</h3>
               <p className={styles.details__subtitle}>{el.productCard.description && el.productCard.description}</p>
               <p className={styles.details__subtitle}>{el.productCard.description2 && el.productCard.description2}</p>
               <p className={styles.details__subtitle}>{el.productCard.description3 && el.productCard.description3}</p>
            </div>
            <div className={styles.details__params}></div>
            <div className={styles.details__docs}></div>
            <Chars el={el} />
         </div>
      </>
   );
}
export default DetailsBody;
