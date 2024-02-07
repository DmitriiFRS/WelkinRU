"use client";

import ContactUs from "../Pages/Homepage/ContactUs/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import Cards from "./Cards";
import styles from "./catalog.module.scss";
import { useEffect, useState } from "react";

function Catalog() {
   const [data, setData] = useState<any>(null);

   useEffect(() => {
      fetch("https://welkingroup.ru/graphql", {
         method: "POST",
         headers: { "Content-type": "application/json" },
         body: JSON.stringify({
            query: `
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
        `,
         }),
      })
         .then((res) => res.json())
         .then((res) => setData(res));
   }, []);

   return (
      data && (
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
      )
   );
}
export default Catalog;
