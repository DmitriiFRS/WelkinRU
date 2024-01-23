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
      subtype: string;
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
   const chillerCheckboxes = useSelector((state: RootState) => state.mainReducer.chillerCheckboxes);
   const vrfCheckboxes = useSelector((state: RootState) => state.mainReducer.vrfCheckboxes);
   const [itemsCopy, setItemsCopy] = useState(items);

   function getFiltration(): void {
      const filterArr: Array<Array<string>> = [[], [], []];
      const newItems: Array<any> = [];
      checkboxes.forEach((el, index) => {
         if (el && buttons[0].checkbox) {
            filterArr[0].push(buttons[0].checkbox[index]);
         }
      });
      chillerCheckboxes.forEach((el, index) => {
         if (el && buttons[0].chillerCheckbox) {
            filterArr[1].push(buttons[0].chillerCheckbox[index]);
         }
      });
      vrfCheckboxes.forEach((el, index) => {
         if (el && buttons[0].vrfCheckbox) {
            filterArr[2].push(buttons[0].vrfCheckbox[index]);
         }
      });
      if (filterArr[0].length > 0) {
         filterArr[0].forEach((el) => {
            items.forEach((item) => {
               if (
                  el === item.attributes.type &&
                  item.attributes.type !== buttons[0].checkbox[1] &&
                  filterArr[1].length < 1 &&
                  filterArr[0].find((el) => el === buttons[0].checkbox[0])
               ) {
                  newItems.push(item);
               } else if (
                  el === item.attributes.type &&
                  item.attributes.type !== buttons[0].checkbox[0] &&
                  filterArr[2].length < 1 &&
                  filterArr[0].find((el) => el === buttons[0].checkbox[1])
               ) {
                  newItems.push(item);
               } else if (el === item.attributes.type && item.attributes.type === buttons[0].checkbox[2]) {
                  newItems.push(item);
               } else if (el === item.attributes.type && item.attributes.type === buttons[0].checkbox[3]) {
                  newItems.push(item);
               }
            });
         });
      }
      if (filterArr[1].length > 0) {
         filterArr[1].forEach((el) => {
            items.forEach((item) => {
               if (el === item.attributes.subtype) {
                  newItems.push(item);
               }
            });
         });
      }
      if (filterArr[2].length > 0) {
         filterArr[2].forEach((el) => {
            items.forEach((item) => {
               if (el === item.attributes.subtype) {
                  newItems.push(item);
               }
            });
         });
      }
      console.log(filterArr);
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
