import Breadcrumbs from "@/app/Utilities/Breadcrumbs";
import styles from "../catalog.module.scss";
import Recommended from "@/app/Pages/Homepage/Recommended";
import ContactUs from "@/app/Pages/Homepage/ContactUs";
import { fetchGraphqlData } from "@/app/Utilities/FetchData";
import DetailsBody from "./DetailsBody";

async function Details({ params }: { params: { Details: string } }) {
   const data = await fetchGraphqlData(`
   query {
      products {
        data {
          attributes {
            name,
            Voltage,
            reference,
            kBTU,
            ton,
            HP,
            kW,
            description1,
            description2,
            description3,
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
      <div className={styles.details}>
         <div className="container">
            <Breadcrumbs />
            <DetailsBody data={data.data.products.data} details={params.Details} />
            <ContactUs />
         </div>
      </div>
   );
}
export default Details;
