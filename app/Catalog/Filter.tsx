import styles from "./catalog.module.scss";
import filterIcon from "../../public/img/catalog/filterIcon.png";
import Image from "next/image";
import arrow from "../../public/svg/arrow.svg";

type ButtonsInnerType = {
   id: number;
   title: string;
   rangeSlider?: {
      min: number;
      max: number;
   };
   checkbox?: Array<string>;
};

type ButtonsType = Array<ButtonsInnerType>;

const buttons: ButtonsType = [
   {
      id: 0,
      title: "Цена",
      rangeSlider: {
         min: 1000,
         max: 9999,
      },
   },
   {
      id: 1,
      title: "Серия",
      checkbox: ["1", "2", "3", "4"],
   },
   {
      id: 2,
      title: "Площадь, кв.м",
      rangeSlider: {
         min: 10,
         max: 1000,
      },
   },
   {
      id: 3,
      title: "Тип фанкойла",
      checkbox: ["1", "2", "3"],
   },
   {
      id: 4,
      title: "Система",
      checkbox: ["1", "2"],
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
            {buttons.map((el) => {
               return (
                  <div key={el.id} className={styles.filter__itemBody}>
                     <button className={styles.filter__item}>
                        <div>{el.title}</div>
                        <Image src={arrow} alt="arrow" />
                     </button>
                  </div>
               );
            })}
         </div>
      </section>
   );
}
export default Filter;
