"use client";

import styles from "./catalog.module.scss";
import Image from "next/image";
import arrow from "../../public/svg/arrow.svg";
import RangeSlider from "../Utilities/RangeSlider";
import Checkboxes from "../Utilities/Checkboxes";
import { useState } from "react";
import { ButtonsInnerType } from "./Filter";

function DropdownMenu({ el }: { el: ButtonsInnerType }) {
   const [isActive, setActive] = useState(false);
   function toggleSubmenu() {
      setActive(!isActive);
   }
   return (
      <div key={el.id} className={styles.filter__itemBody}>
         <button className={styles.filter__item} onClick={toggleSubmenu}>
            <div>{el.title}</div>
            <Image src={arrow} alt="arrow" />
         </button>
         <div className={`${styles.filter__itemInner} ${isActive ? styles.filter__itemInner__active : ""}`}>
            {el.rangeSlider ? (
               <RangeSlider
                  min={el.rangeSlider.min}
                  max={el.rangeSlider.max}
                  minDistance={el.rangeSlider.minDistance}
               />
            ) : (
               el.checkbox && <Checkboxes checkbox={el.checkbox} id={el.id} />
            )}
         </div>
      </div>
   );
}
export default DropdownMenu;
