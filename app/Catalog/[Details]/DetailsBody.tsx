"use client";

import { useEffect, useState } from "react";
import styles from "../catalog.module.scss";
import Image from "next/image";

type DataType = {
   attributes: {
      name: string;
      Voltage: string | null;
      reference: string;
      kBTU: string | null;
      ton: string | null;
      HP: string | null;
      kW: string | null;
      description1: string | null;
      description2: string | null;
      description3: string | null;
      image: any;
   };
};

type Props = {
   data: Array<DataType>;
   details: string;
};

function DetailsBody({ data, details }: Props) {
   const [item, setItem] = useState<DataType | null>(null);
   useEffect(() => {
      const newItem = data.filter((el: DataType) => {
         return el.attributes.reference.replace(/\s|\//g, "_") === details;
      });
      setItem(newItem[0]);
   }, [data]);

   useEffect(() => {
      console.log(item);
   }, [item]);
   console.log(data);
   return (
      item && (
         <div className={styles.details}>
            <div className={styles.details__main}>
               <div className={`${styles.cards__item__imgBlock} ${styles.cards__item__imgBlock__item}`}>
                  <div className={`${styles.cards__item__imgBody} ${styles.cards__item__imgBody__item}`}>
                     <Image src={item.attributes.image.data.attributes.url} alt="welkin" fill />
                  </div>
               </div>
               <div className={styles.details__mainParamsBody}>
                  <div className={styles.details__name}>{item.attributes.name}</div>
                  <div className={styles.details__mainParams}>
                     <div className={styles.details__mainParam}>
                        Вольтаж, V:<span>{item.attributes.Voltage}</span>
                     </div>
                     <div className={styles.details__mainParam}>
                        Мощность, kBTU:
                        <span>{item.attributes.kBTU}</span>
                     </div>
                  </div>
                  <button className={`${styles.details__item__btn} btnYellow`}>
                     <span>Узнать цену</span>
                  </button>
               </div>
            </div>
            <div className={styles.details__titleBody}>
               <h3 className={styles.details__title}>Описание</h3>
               <p className={styles.details__subtitle}>
                  {item.attributes.description1 && item.attributes.description1}
               </p>
               <p className={styles.details__subtitle}>
                  {item.attributes.description2 && item.attributes.description2}
               </p>
               <p className={styles.details__subtitle}>
                  {item.attributes.description3 && item.attributes.description3}
               </p>
            </div>
            <div className={styles.details__params}></div>
            <div className={styles.details__docs}></div>
         </div>
      )
   );
}
export default DetailsBody;
