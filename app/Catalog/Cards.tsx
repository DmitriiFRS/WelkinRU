import styles from "./catalog.module.scss";
import Image from "next/image";
import sortIcon from "../../public/img/catalog/sortIcon.png";
import example from "../../public/img/catalog/example.png";
import SortDropdown from "./SortDropdown";
import SortBlock from "./SortBlock";

const items = [
   {
      id: 0,
      img: example,
      name: "Welkin H30/5R1B",
      type: "Модульный чиллер",
   },
   {
      id: 1,
      img: example,
      name: "Welkin H30/5R1B",
      type: "Модульный чиллер",
   },
   {
      id: 2,
      img: example,
      name: "Welkin H30/5R1B",
      type: "Модульный чиллер",
   },
   {
      id: 3,
      img: example,
      name: "Welkin H30/5R1B",
      type: "Модульный чиллер",
   },
];

function Cards() {
   return (
      <section className={styles.cards}>
         <SortBlock />
         <ul className={styles.cards__body}>
            {items.map((el) => {
               return (
                  <li key={el.id} className={styles.cards__item}>
                     <div className={styles.cards__item__imgBlock}>
                        <div className={styles.cards__item__imgBody}>
                           <Image src={el.img} alt="welkin" />
                        </div>
                     </div>
                     <div className={styles.cards__item__titleBlock}>
                        <div className={styles.cards__item__title}>{el.name}</div>
                        <div className={styles.cards__item__type}>{el.type}</div>
                     </div>
                     <button className={`${styles.cards__item__btn} btnYellow`}>
                        <span>Узнать цену</span>
                     </button>
                  </li>
               );
            })}
         </ul>
      </section>
   );
}
export default Cards;
