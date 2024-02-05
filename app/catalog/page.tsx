import { Metadata } from "next/types";
import ContactUs from "../Pages/Homepage/ContactUs/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import { fetchGraphqlData } from "../Utilities/FetchData";
import Cards from "./Cards";
import styles from "./catalog.module.scss";

export const metadata: Metadata = {
   title: "Каталог",
   description: "Каталог Welkin",
};

async function catalog() {
   const data = await fetchGraphqlData(`
   query {
    items {
      data {
        attributes {
          Name
          Type
          Reference
          Subtype
          Image {
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
   console.log(data.data);
   return (
      <div className={styles.catalog}>
         <div className="container">
            <Breadcrumbs />
            <h2 className={styles.catalog__title}>Каталог</h2>
            <div className={styles.catalog__body}>
               <Cards items={data.data.items.data} />
            </div>
         </div>
         <ContactUs />
      </div>
   );
}
export default catalog;
//comment
