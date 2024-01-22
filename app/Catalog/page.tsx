import ContactUs from "../Pages/Homepage/ContactUs/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import { fetchGraphqlData } from "../Utilities/FetchData";
import Cards from "./Cards";
import Filter from "./Filter";
import styles from "./catalog.module.scss";

async function Catalog() {
   const data = await fetchGraphqlData(`
   query {
      products {
        data {
          attributes {
            name,
            type,
            reference,
            subtype
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
   `);
   return (
      <div className={styles.catalog}>
         <div className="container">
            <Breadcrumbs />
            <h2 className={styles.catalog__title}>Каталог</h2>
            <div className={`${styles.catalog__body} 'catalog__body`}>
               <Cards items={data.data.products.data} />
            </div>
         </div>
         <ContactUs />
      </div>
   );
}
export default Catalog;
