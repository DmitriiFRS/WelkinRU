"use client";

import styles from "./catalog.module.scss";
import Content from "./Items/Content";
import Filter, { ButtonsType } from "./Filter";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { useState } from "react";

type ItemType = {
   attributes: {
      name: string;
      type: string;
      reference: string;
      image: any;
   };
};

type Props = Array<ItemType>;

const buttons: ButtonsType = [
   {
      id: 1,
      title: "Система",
      checkbox: ["Чиллер-фанкойл", "VRF-Система", "Приточные установки", "Крышные кондиционеры"],
      chillerCheckbox: [
         "Чиллеры",
         "Кассетные фанкойлы",
         "Канальные фанкойлы",
         "Настенные фанкойлы",
         "Потолочные и напольные фанкойлы",
      ],
      vrfCheckbox: [
         "Наружные блоки",
         "Кассетные внутренние блоки",
         "Канальные внутренние блоки",
         "Настенные внутренние блоки",
      ],
   },
];

function Cards({ items }: { items: Props }) {
   const checkboxes = useSelector((state: RootState) => state.mainReducer.equipCheckboxes);
   const chillerCheckbox = useSelector((state: RootState) => state.mainReducer.chillerCheckboxes);
   const vrfCheckbox = useSelector((state: RootState) => state.mainReducer.vrfCheckboxes);
   const [itemsCopy, setItemsCopy] = useState(items);

   function getFiltration(): void {
      const filterArr: Array<string> = [];
      const newItems: Array<any> = [];
      checkboxes.forEach((el, index) => {
         if (el && buttons[0].checkbox) {
            filterArr.push(buttons[0].checkbox[index]);
         }
      });
      if (filterArr.length < 1) return;
      filterArr.forEach((el) => {
         items.forEach((item, index) => {
            if (el === item.attributes.type) {
               newItems.push(item);
            }
         });
      });
      setItemsCopy(newItems);
   }

   return (
      <>
         <section className={styles.cards}>
            <Content items={itemsCopy} />
         </section>
         <Filter getFiltration={getFiltration} buttons={buttons} />
      </>
   );
}
export default Cards;
