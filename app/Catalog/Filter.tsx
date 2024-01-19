import styles from "./catalog.module.scss";
import filterIcon from "../../public/img/catalog/filterIcon.png";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";

export type ButtonsInnerType = {
   id: number;
   title: string;
   rangeSlider?: {
      min: number;
      max: number;
      minDistance: number;
   };
   checkbox?: Array<string>;
};

export type ButtonsType = Array<ButtonsInnerType>;

function Filter({ getFiltration, buttons }: { getFiltration: Function; buttons: ButtonsType }) {
   return (
      <section className={styles.filter}>
         <div className={styles.filter__sortBtn}>
            <Image src={filterIcon} alt="filter" />
            <span className={styles.filter__sortText}>Фильтр</span>
         </div>
         <div className={styles.filter__sortBody}>
            {buttons.map((el, index) => {
               return <DropdownMenu key={index} el={el} />;
            })}
         </div>
         <div className={styles.filter__acceptBody}>
            <button className={`${styles.filter__accept} btnBlack`} onClick={getFiltration}>
               <span>Применить</span>
            </button>
         </div>
      </section>
   );
}
export default Filter;
