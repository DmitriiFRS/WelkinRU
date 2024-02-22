import ContactUs from "../pg/Homepage/ContactUs/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import { fetchGraphqlData } from "../Utilities/FetchData";
import CatalogContainer from "./CatalogContainer";
import styles from "./catalog.module.scss";

export async function generateMetadata() {
   const data = await fetchGraphqlData(
      `
      query {
         metadata {
           nodes {
             title {
               description
               title
             }
           }
         }
       }
    `
   );
   return {
      title: data.data.metadata.nodes[3].title.title,
      description: data.data.metadata.nodes[3].title.description,
   };
}

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
