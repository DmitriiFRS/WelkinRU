import styles from "./catalog.module.scss";
import Content from "./Items/Content";

type ItemType = {
   attributes: {
      name: string;
      type: string;
      reference: string;
      image: any;
   };
};

type Props = Array<ItemType>;

function Cards({ items }: { items: any }) {
   return (
      <section className={styles.cards}>
         <Content items={items} />
      </section>
   );
}
export default Cards;
