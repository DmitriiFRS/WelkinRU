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
            description,
            reference
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
   //console.log(data.data.products.data[0].attributes.image.data.attributes.url);
   return (
      <div className={styles.catalog}>
         <div className="container">
            <Breadcrumbs />
            <h2 className={styles.catalog__title}>Каталог</h2>
            <div className={styles.catalog__body}>
               <Cards items={data.data.products.data} />
               <Filter />
            </div>
         </div>
      </div>
   );
}
export default Catalog;
