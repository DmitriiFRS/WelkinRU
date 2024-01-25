import styles from "./catalog.module.scss";

const list = ["По популярности", "По ретингу", "Сначала дешевле", "Сначала дороже"];

function SortDropdown({ isActive }: { isActive: boolean }) {
   return (
      <div className={`${styles.cards__sortDropdown} ${isActive ? styles.cards__sortDropdown__active : ""}`}>
         <ul className={styles.cards__sortDropdown__list}>
            {list.map((el, index) => {
               return (
                  <button key={index} className={styles.cards__sortDropdown__item}>
                     {el}
                  </button>
               );
            })}
         </ul>
      </div>
   );
}
export default SortDropdown;
