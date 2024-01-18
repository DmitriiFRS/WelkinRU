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

type ButtonsType = Array<ButtonsInnerType>;

const buttons: ButtonsType = [
   {
      id: 1,
      title: "Система",
      checkbox: ["Чиллер-фанкойл", "VRF Система", "Приточные установки", "Крышные кондиционеры"],
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
function Filter() {
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
            <button className={`${styles.filter__accept} btnBlack`}>
               <span>Применить</span>
            </button>
         </div>
      </section>
   );
}
export default Filter;
