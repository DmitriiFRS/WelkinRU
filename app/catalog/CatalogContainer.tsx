"use client";

import { useState, useEffect } from "react";
import Cards from "./Cards";
import styles from "./catalog.module.scss";
import Loader from "./Loader";

function CatalogContainer({ jwtToken }: any) {
   const [data, setData] = useState<any>(null);

   useEffect(() => {
      const headers = {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`,
      };
      fetch("https://welkingroup.ru/wpgraphql", {
         method: "POST",
         headers: headers,
         body: JSON.stringify({
            query: `
            query {
              products(first: 99) {
                nodes {
                  productCard {
                    title
                    type
                    href
                    subtype
                    image {
                      node {
                        sourceUrl
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

   return <div className={styles.catalog__body}>{!data ? <Loader /> : <Cards items={data.data.products.nodes} />}</div>;
}
export default CatalogContainer;
