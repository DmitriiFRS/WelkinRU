import styles from "./catalog.module.scss";
function MainCheckboxes({ checkbox, id }: { checkbox: Array<string>; id: number }) {
   return (
      <div className={styles.checkbox}>
         {checkbox.map((el, index) => {
            return (
               <label key={index} htmlFor={(id + index).toString()} className={styles.checkbox__item}>
                  <input type="checkbox" id={(id + index).toString()} className={styles.checkbox__checkbox} />
                  <span className={styles.checkbox__name}>{el}</span>
               </label>
            );
         })}
      </div>
   );
}
export default MainCheckboxes;
