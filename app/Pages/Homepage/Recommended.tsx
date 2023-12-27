import styles from "./homepage.module.scss";
import Image from "next/image";
import recommended1 from "../../../public/img/recommended/recommended1.png";
import recommended2 from "../../../public/img/recommended/recommended2.png";
import recommended3 from "../../../public/img/recommended/recommended3.png";
import recommended4 from "../../../public/img/recommended/recommended4.png";

const cards = [
   {
      id: 0,
      img: recommended1,
      name: "Welkin H250/SR1MV",
      category: "Система VRF",
   },
   {
      id: 1,
      img: recommended2,
      name: "Welkin H30/5R1B",
      category: "Модульный чиллер",
   },
   {
      id: 2,
      img: recommended3,
      name: "Welkin MRCT-60CWN1-R",
      category: "Крышной кондиционер",
   },
   {
      id: 3,
      img: recommended4,
      name: "Welkin 300CA/4BA",
      category: "Фанкойл кассетного типа",
   },
];

function Recommended() {
   return (
      <div className={styles.recommended}>
         <div className="container">
            <h2 className={styles.recommended__title}>Рекомендуем</h2>
            <ul className={styles.recommended__list}>
               {cards.map((el) => {
                  return (
                     <li key={el.id} className={styles.recommended__item}>
                        <div className={styles.recommended__cardBody}>
                           <div className={styles.recommended__imgBody}>
                              <Image src={el.img} alt={el.name} fill />
                           </div>
                        </div>
                        <p className={styles.recommended__model}>{el.name}</p>
                        <p className={styles.recommended__type}>{el.category}</p>
                        <button className={styles.recommended__btn}>Узнать цену</button>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
}
export default Recommended;
