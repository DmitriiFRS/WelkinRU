import styles from "./catalog.module.scss";
import example from "../../public/img/catalog/example.png";
import SortBlock from "./SortBlock";
import Content from "./Items/Content";

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
   {
      id: 4,
      img: example,
      name: "Welkin H30/5R1B",
      type: "Модульный чиллер",
   },
   {
      id: 5,
      img: example,
      name: "Welkin H30/5R1B",
      type: "Модульный чиллер",
   },
   {
      id: 6,
      img: example,
      name: "Welkin H30/5R1B",
      type: "Модульный чиллер",
   },
   {
      id: 7,
      img: example,
      name: "Welkin H30/5R1B",
      type: "Модульный чиллер",
   },
   {
      id: 8,
      img: example,
      name: "Welkin H30/5R1B",
      type: "Модульный чиллер",
   },
   {
      id: 9,
      img: example,
      name: "Welkin H30/5R1B",
      type: "Модульный чиллер",
   },
];
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
