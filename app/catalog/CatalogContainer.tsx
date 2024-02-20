"use client";

import { useState, useEffect } from "react";
import Cards from "./Cards";
import styles from "./catalog.module.scss";
import Loader from "./Loader";

function CatalogContainer() {
   const [data, setData] = useState<any>(null);

   useEffect(() => {
      fetch("https://welkingroup.ru/wpgraphql", {
         method: "POST",
         headers: { "Content-type": "application/json" },
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
   useEffect(() => {
      data ? console.log(data.data.products.nodes) : "";
   }, [data]);

   return <div className={styles.catalog__body}>{!data ? <Loader /> : <Cards items={data.data.products.nodes} />}</div>;
}
export default CatalogContainer;
