import Breadcrumbs from "@/app/Utilities/Breadcrumbs";
import styles from "../catalog.module.scss";
import Recommended from "@/app/Pages/Homepage/Recommended";
import ContactUs from "@/app/Pages/Homepage/ContactUs/ContactUs";
import { fetchGraphqlData } from "@/app/Utilities/FetchData";
import DetailsBody, { DataType } from "./DetailsBody";
import CatalogPDF from "./CatalogPDF";

type MetadataType = {
   attributes: {
      name: string;
      type: string;
      reference: string;
   };
};

export async function generateMetadata({ params }: { params: { Details: string } }) {
   const item = await fetchGraphqlData(`
    query {
      products {
        data {
          attributes {
            name
            type
            reference
          }
        }
      }
    }
  `);
   const searchItem = item.data.products.data.find(
      (el: MetadataType) => el.attributes.reference.replace(/\s|\//g, "_") === params.Details
   );
   return {
      title: searchItem.attributes.name,
      description: searchItem.attributes.type,
   };
}

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
   const decodedPhoneNumber = decodeURI(data.data.phone.data.attributes.header);
   return (
      <div className={styles.details}>
         <div className="container">
            <Breadcrumbs />
            {data.data.products.data.map((el: DataType, index: number) => {
               if (el.attributes.reference.replace(/\s|\//g, "_") === params.Details) {
                  return <DetailsBody key={index} el={el} decodedPhoneNumber={decodedPhoneNumber} />;
               }
            })}
            <CatalogPDF />
            <Recommended data={data.data.recommended.data.attributes.produkties.data} />
         </div>
         <ContactUs />
      </div>
   );
}
export default Details;
