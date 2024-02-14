import Breadcrumbs from "@/app/Utilities/Breadcrumbs";
import styles from "../catalog.module.scss";
import Recommended from "@/app/pg/Homepage/Recommended";
import ContactUs from "@/app/pg/Homepage/ContactUs/ContactUs";
import { fetchGraphqlData } from "@/app/Utilities/FetchData";
import DetailsBody, { DataType } from "./DetailsBody";
import CatalogPDF from "./CatalogPDF";

type MetadataType = {
   attributes: {
      Name: string;
      Type: string;
      Reference: string;
   };
};

export async function generateMetadata({ params }: { params: { Details: string } }) {
   const item = await fetchGraphqlData(`
    query {
      items {
        data {
          attributes {
            Name
            Type
            Reference
          }
        }
      }
    }
  `);
   const searchItem = item.data.items.data.find(
      (el: MetadataType) => el.attributes.Reference.replace(/\s|\//g, "_") === params.Details
   );
   return {
      title: searchItem.attributes.Name,
      description: searchItem.attributes.Type,
   };
}

async function Details({ params }: { params: { Details: string } }) {
   const data = await fetchGraphqlData(`
   query {
    items {
      data {
        attributes {
          Name
          Type
          Reference
          Subtype
          Cooling_Output
          Heat_Output
          Size
          Description
          Description2
          Description3
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
    recommended(id:2) {
      data {
        attributes {
          recom {
            data {
              id
              attributes {
                Name
                Type
                Reference
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
      }
    }
    phone {
      data {
        attributes {
          Header
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
            {data.data.items.data.map((el: DataType, index: number) => {
               if (el.attributes.Reference.replace(/\s|\//g, "_") === params.Details) {
                  return <DetailsBody key={index} el={el} decodedPhoneNumber={decodedPhoneNumber} />;
               }
            })}
            <CatalogPDF />
            <Recommended data={data.data.recommended.data.attributes.recom.data} />
         </div>
         <ContactUs />
      </div>
   );
}
export default Details;
