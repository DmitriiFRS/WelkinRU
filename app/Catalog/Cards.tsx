import styles from "./catalog.module.scss";
import Content from "./Items/Content";

function Cards({ items }: { items: any }) {
   return (
      <section className={styles.cards}>
         <Content items={items} />
      </section>
   );
}
export default Cards;
