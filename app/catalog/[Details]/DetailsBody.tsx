import styles from "../catalog.module.scss";
import Image from "next/image";
import Chars from "./Chars";

export type DataType = {
   attributes: {
      Name: string;
      Type: string;
      Voltage: string | null;
      Reference: string;
      kBTU: string | null;
      Heat_Output: string | null;
      Cooling_Output: string | null;
      Description: string | null;
      Description2: string | null;
      Description3: string | null;
      Size: string | null;
      Subtype: string;
      Image: any;
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
                     <Image
                        src={`https://welkingroup.ru${el.attributes.Image.data.attributes.url}`}
                        alt="welkin"
                        fill
                        objectFit="contain"
                     />
                  </div>
               </div>
               <div className={styles.details__mainParamsBody}>
                  <div className={styles.details__name}>{el.attributes.Name}</div>
                  <div className={styles.details__mainParams}>
                     <div className={styles.details__mainParam}>
                        Теплопроизводительность, Квт:<span>{el.attributes.Heat_Output}</span>
                     </div>
                     <div className={styles.details__mainParam}>
                        Холодопроизводительность, Квт:
                        <span>{el.attributes.Cooling_Output}</span>
                     </div>
                  </div>
                  <a href={"tel://" + decodedPhoneNumber} className={`${styles.details__item__btn} btnYellow`}>
                     <span>Узнать цену</span>
                  </a>
               </div>
            </div>
            <div className={styles.details__titleBody}>
               <h3 className={styles.details__title}>Описание</h3>
               <p className={styles.details__subtitle}>{el.attributes.Description && el.attributes.Description}</p>
               <p className={styles.details__subtitle}>{el.attributes.Description2 && el.attributes.Description2}</p>
               <p className={styles.details__subtitle}>{el.attributes.Description3 && el.attributes.Description3}</p>
            </div>
            <div className={styles.details__params}></div>
            <div className={styles.details__docs}></div>
            <Chars el={el} />
         </div>
      </>
   );
}
export default DetailsBody;
