"use client";

import { useState, useEffect } from "react";
import Cards from "./Cards";
import styles from "./catalog.module.scss";
import Loader from "./Loader";

function CatalogContainer() {
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
   return <div className={styles.catalog__body}>{!data ? <Loader /> : <Cards items={data.data.items.data} />}</div>;
}
export default CatalogContainer;
