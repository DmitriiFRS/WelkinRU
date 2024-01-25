import styles from "./header.module.scss";
import Image from "next/image";

type CatalogMenuProps = {
   id: number;
   name: string;
   icon?: any;
   href: string | null;
};

function CatalogMenu({ el }: { el: CatalogMenuProps }) {
   return (
      <li key={el.id} className={styles.header__item}>
         <div>{el.name}</div>
         <Image className={styles.header__arrow} src={el.icon} alt="icon" width={12} height={6} />
      </li>
   );
}
export default CatalogMenu;
