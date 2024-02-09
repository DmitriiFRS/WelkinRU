import ContactUs from "../Pages/Homepage/ContactUs/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import CatalogContainer from "./CatalogContainer";
import styles from "./catalog.module.scss";

function Catalog() {
   return (
      <div className={styles.catalog}>
         <div className="container">
            <Breadcrumbs />
            <h2 className={styles.catalog__title}>Каталог</h2>
            <CatalogContainer />
         </div>
         <ContactUs />
      </div>
   );
}
export default Catalog;
