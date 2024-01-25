"use client";

import styles from "./catalog.module.scss";
import Image from "next/image";
import arrow from "../../public/svg/arrow.svg";
import RangeSlider from "../Utilities/RangeSlider";
import Checkboxes from "../Utilities/Checkboxes";
import { useState } from "react";
import { ButtonsInnerType } from "./Filter";
import SubDropdown from "./SubDropdown";

const subDropdown = [
   {
      id: 2000,
      title: "Тип фанкойла",
      checkbox: [
         "Чиллеры",
         "Кассетные фанкойлы",
         "Канальные фанкойлы",
         "Настенные фанкойлы",
         "Потолочные и напольные фанкойлы",
      ],
      classname: styles.filter__subItemBody1,
   },
   {
      id: 3000,
      title: "Тип VRF",
      checkbox: [
         "Наружные блоки",
         "Кассетные внутренние блоки",
         "Канальные внутренние блоки",
         "Настенные внутренние блоки",
      ],
      classname: styles.filter__subItemBody2,
   },
];

function DropdownMenu({ el }: { el: ButtonsInnerType }) {
   const [isActive, setActive] = useState(false);
   function toggleSubmenu() {
      setActive(!isActive);
   }
   return (
      <div key={el.id} className={styles.filter__itemBody}>
         <button className={styles.filter__item} onClick={toggleSubmenu}>
            <div>{el.title}</div>
            <Image
               className={`${styles.filter__arrowIcon} ${isActive ? styles.filter__arrowIcon__active : ""}`}
               src={arrow}
               alt="arrow"
            />
         </button>
         <div className={`${styles.filter__itemInner} ${isActive ? styles.filter__itemInner__active : ""}`}>
            {el.rangeSlider ? (
               <RangeSlider
                  min={el.rangeSlider.min}
                  max={el.rangeSlider.max}
                  minDistance={el.rangeSlider.minDistance}
               />
            ) : (
               el.checkbox && (
                  <>
                     <Checkboxes checkbox={el.checkbox} id={el.id} />
                     <SubDropdown el={subDropdown[0]} index={0} />
                     <SubDropdown el={subDropdown[1]} index={1} />
                  </>
               )
            )}
         </div>
      </div>
   );
}
export default DropdownMenu;
