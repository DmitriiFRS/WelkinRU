import Breadcrumbs from "../Utilities/Breadcrumbs";
import Cards from "./Cards";
import Filter from "./Filter";
import styles from "./catalog.module.scss";

function Catalog() {
   return (
      <div className={styles.catalog}>
         <div className="container">
            <Breadcrumbs />
            <h2 className={styles.catalog__title}>Каталог</h2>
            <div className={styles.catalog__body}>
               <Cards />
               <Filter />
            </div>
         </div>
      </div>
   );
}
export default Catalog;
