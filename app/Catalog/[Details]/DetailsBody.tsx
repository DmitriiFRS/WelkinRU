import styles from "../catalog.module.scss";
import Image from "next/image";
import Chars from "./Chars";

export type DataType = {
   attributes: {
      name: string;
      type: string;
      Voltage: string | null;
      reference: string;
      kBTU: string | null;
      ton: string | null;
      Heat_Output: string | null;
      Cooling_Output: string | null;
      description1: string | null;
      description2: string | null;
      description3: string | null;
      size: string | null;
      subtype: string;
      image: any;
   };
};

type Props = {
   data: Array<DataType>;
   details: string;
   phone: string;
};

async function DetailsBody({ data, details, phone }: Props) {
   const decodedPhoneNumber = decodeURI(phone);
   return (
      <>
         {data.map((el, index) => {
            if (el.attributes.reference.replace(/\s|\//g, "_") === details) {
               return (
                  <div key={index} className={styles.details}>
                     <div className={styles.details__main}>
                        <div className={`${styles.cards__item__imgBlock} ${styles.cards__item__imgBlock__item}`}>
                           <div className={`${styles.cards__item__imgBody} ${styles.cards__item__imgBody__item}`}>
                              <Image
                                 src={el.attributes.image.data.attributes.url}
                                 alt="welkin"
                                 fill
                                 objectFit="contain"
                              />
                           </div>
                        </div>
                        <div className={styles.details__mainParamsBody}>
                           <div className={styles.details__name}>{el.attributes.name}</div>
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
                        <p className={styles.details__subtitle}>
                           {el.attributes.description1 && el.attributes.description1}
                        </p>
                        <p className={styles.details__subtitle}>
                           {el.attributes.description2 && el.attributes.description2}
                        </p>
                        <p className={styles.details__subtitle}>
                           {el.attributes.description3 && el.attributes.description3}
                        </p>
                     </div>
                     <div className={styles.details__params}></div>
                     <div className={styles.details__docs}></div>
                     <Chars el={el} />
                  </div>
               );
            }
         })}
      </>
   );
}
export default DetailsBody;
