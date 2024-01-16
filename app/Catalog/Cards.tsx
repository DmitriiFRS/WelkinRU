import styles from "./catalog.module.scss";
import example from "../../public/img/catalog/example.png";
import SortBlock from "./SortBlock";
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

function Cards({ items }: { items: Props }) {
   return (
      <section className={styles.cards}>
         <Content items={items} />
      </section>
   );
}
export default Cards;
