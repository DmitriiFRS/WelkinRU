import styles from "./about.module.scss";

const cols = [
   {
      id: 0,
      title: "Быстрая доставка",
      subtitle: "До вашего дома",
   },
   {
      id: 1,
      title: "Поддержка 24/7",
      subtitle: "Мы всегда на связи",
   },
   {
      id: 2,
      title: "Официальная гарантия",
      subtitle: "На всю продукцию",
   },
   {
      id: 3,
      title: "Оплата",
      subtitle: "Любой способ оплаты",
   },
];

function Cols() {
   return (
      <section className={styles.about__cols}>
         <h2 className={styles.about__cols__title}>То, что выделяет нас</h2>
         <ul className={styles.about__cols__colsBody}>
            {cols.map((el) => {
               return (
                  <li key={el.id} className={styles.about__cols__item}>
                     <div>{el.title}</div>
                     <div>{el.subtitle}</div>
                  </li>
               );
            })}
         </ul>
      </section>
   );
}
export default Cols;
