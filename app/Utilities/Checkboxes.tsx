import { useDispatch, useSelector } from "react-redux";
import styles from "./utilities.module.scss";
import { RootState } from "../Redux/store";
import { toggleChillerCheckboxes, toggleEquipCheckbox, toggleVrfCheckboxes } from "../Redux/main.slice";
import { useEffect } from "react";

function Checkboxes({ checkbox, id }: { checkbox: Array<string>; id: number }) {
   const checkboxes = useSelector((state: RootState) => state.mainReducer.equipCheckboxes);
   const chillerCheckboxes = useSelector((state: RootState) => state.mainReducer.chillerCheckboxes);
   const vrfCheckboxes = useSelector((state: RootState) => state.mainReducer.vrfCheckboxes);
   const dispatch = useDispatch();

   function toggleCheckbox(idx: number) {
      dispatch(toggleEquipCheckbox(idx));
   }

   function toggleSubCheckboxes(idx: number) {
      if (id === 2000) {
         dispatch(toggleChillerCheckboxes(idx));
      } else {
         dispatch(toggleVrfCheckboxes(idx));
      }
   }

   return (
      <div className={styles.checkbox}>
         {id === 1 ? (
            <>
               {checkbox.map((el, index) => {
                  return (
                     <label
                        onClick={() => toggleCheckbox(index)}
                        key={index}
                        htmlFor={(id + index).toString()}
                        className={styles.checkbox__item}
                     >
                        <input
                           checked={checkboxes[index]}
                           readOnly
                           type="checkbox"
                           id={(id + index).toString()}
                           className={styles.checkbox__checkbox}
                        />
                        <span className={styles.checkbox__name}>{el}</span>
                     </label>
                  );
               })}
            </>
         ) : (
            checkbox && (
               <>
                  {checkbox.map((el, index) => {
                     return (
                        <label
                           onClick={() => toggleSubCheckboxes(index)}
                           key={index}
                           htmlFor={(id + index).toString()}
                           className={styles.checkbox__item}
                        >
                           <input type="checkbox" id={(id + index).toString()} className={styles.checkbox__checkbox} />
                           <span className={styles.checkbox__name}>{el}</span>
                        </label>
                     );
                  })}
               </>
            )
         )}
      </div>
   );
}
export default Checkboxes;
