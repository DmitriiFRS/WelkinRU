"use client";

import styles from "./catalog.module.scss";
import Content from "./Items/Content";
import Filter, { ButtonsType } from "./Filter";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

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
   },
   {
      id: 100,
      title: "Площадь, кв.м",
      rangeSlider: {
         min: 10,
         max: 1000,
         minDistance: 100,
      },
   },
   {
      id: 1000,
      title: "Холодопроизводительность",
      rangeSlider: {
         min: 10,
         max: 1000,
         minDistance: 100,
      },
   },
];

function Cards({ items }: { items: Props }) {
   const checkboxes = useSelector((state: RootState) => state.mainReducer.equipCheckboxes);
   function getFiltration() {}
   return (
      <>
         <section className={styles.cards}>
            <Content items={items} />
         </section>
         <Filter getFiltration={getFiltration} buttons={buttons} />
      </>
   );
}
export default Cards;
