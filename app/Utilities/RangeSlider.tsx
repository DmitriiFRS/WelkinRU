"use client";

import { useState } from "react";
import styles from "./utilities.module.scss";
import Slider from "react-slider";

function RangeSlider({ min, max, minDistance }: { min: number; max: number; minDistance: number }) {
   const [values, setValues] = useState([min, max]);
   function setFirstValue(e: any) {
      const currentValue = e.target.value;
      if (currentValue > max - min) return;
      setValues([currentValue, values[1]]);
   }
   function setSecondValue(e: any) {
      const currentValue = e.target.value;
      if (currentValue > max) return;
      setValues([values[0], currentValue]);
   }
   return (
      <div className={styles.range}>
         <div className={styles.range__inputs}>
            <input type="number" className={styles.range__input} value={values[0]} onChange={(e) => setFirstValue(e)} />
            <input
               type="number"
               className={styles.range__input}
               value={values[1]}
               onChange={(e) => setSecondValue(e)}
            />
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
            <span className={styles.range__minmax}>{min}</span>
            <span className={styles.range__minmax}>{max}</span>
         </div>
      </div>
   );
}
export default RangeSlider;
