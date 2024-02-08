import ContactUs from "../Pages/Homepage/ContactUs/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import styles from "./catalog.module.scss";
import CatalogContainer from "./page";

function Catalog() {
   return (
      <div className={styles.catalog}>
         <div className="container">
            <Breadcrumbs />
            <h2 className={styles.catalog__title}>Каталог</h2>
            <div className={styles.catalog__body}>
               <CatalogContainer />
            </div>
         </div>
         <ContactUs />
      </div>
   );
}
export default Catalog;
