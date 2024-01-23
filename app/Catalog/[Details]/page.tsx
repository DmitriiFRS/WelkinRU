import Breadcrumbs from "@/app/Utilities/Breadcrumbs";
import styles from "../catalog.module.scss";
import Recommended from "@/app/Pages/Homepage/Recommended";
import ContactUs from "@/app/Pages/Homepage/ContactUs/ContactUs";
import { fetchGraphqlData } from "@/app/Utilities/FetchData";
import DetailsBody from "./DetailsBody";
import Chars from "./Chars";
import CatalogPDF from "./CatalogPDF";

async function Details({ params }: { params: { Details: string } }) {
   const data = await fetchGraphqlData(`
   query {
    products {
      data {
        attributes {
          name
          type
          subtype
          reference
          Cooling_Output
          Heat_Output
          ton
          size
          description1
          description2
          description3
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
      recommended(id: 1) {
        data {
          attributes {
            produkties {
              data {
                id,
                attributes {
                  name,
                  type,
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
        }
      }
      phone {
        data {
          attributes {
            header
          }
        }
      }
    }
   `);
   return (
      <div className={styles.details}>
         <div className="container">
            <Breadcrumbs />
            <DetailsBody
               data={data.data.products.data}
               details={params.Details}
               phone={data.data.phone.data.attributes.header}
            />
            <CatalogPDF />
            <Recommended data={data.data.recommended.data.attributes.produkties.data} />
         </div>
         <ContactUs />
      </div>
   );
}
export default Details;
