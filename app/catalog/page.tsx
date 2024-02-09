"use client";

import { useState, useEffect } from "react";
import Cards from "./Cards";
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
   return !data ? <Loader /> : <Cards items={data.data.items.data} />;
}
export default CatalogContainer;
