"use client";

import { useState } from "react";
import styles from "./utilities.module.scss";
import Slider from "react-slider";

function RangeSlider({ min, max, minDistance }: { min: number; max: number; minDistance: number }) {
   const [values, setValues] = useState([min, max]);
   function setNewValue(e: any, idx: number) {
      const currentValue = e.target.value;
      if (currentValue < min) return;
      setValues([currentValue, values[idx]]);
   }
   return (
      <div className={styles.range}>
         <div className={styles.range__inputs}>
            <input
               type="number"
               className={styles.range__input}
               value={values[0]}
               onChange={(e) => setNewValue(e, 1)}
            />
            <input type="number" className={styles.range__input} value={values[1]} />
         </div>
         <div className={styles.range__sliderBody}>
            <Slider
               className={`${styles.range__slider} ${"range-slider"}`}
               min={min}
               max={max}
               value={values}
               onChange={setValues}
               minDistance={minDistance}
            />
         </div>
         <div className={styles.range__minmaxBody}>
            <span className={styles.range__minmax}>{values[0]}</span>
            <span className={styles.range__minmax}>{values[1]}</span>
         </div>
      </div>
   );
}
export default RangeSlider;
