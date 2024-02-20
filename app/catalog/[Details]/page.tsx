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

/*export async function generateMetadata({ params }: { params: { Details: string } }) {
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
}*/

async function Details({ params }: { params: { Details: string } }) {
   const data = await fetchGraphqlData(`
   query {
    products(first: 99) {
      nodes {
        productCard {
          title
          type
          href
          subtype
          coolingOutput
          heatOutput
          size
          description
          description2
          description3
          image {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    recommends {
      nodes {
        productRecommended {
          name
          type
          href
          image {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    phones {
      nodes {
        phoneNumber {
          number
        }
      }
    }
  }
   `);
   const decodedPhoneNumber = decodeURI(data.data.phones.nodes[0].phoneNumber.number);
   return (
      <div className={styles.details}>
         <div className="container">
            <Breadcrumbs />
            {data.data.products.nodes.map((el: DataType, index: number) => {
               if (el.productCard.href.replace(/\s|\//g, "_") === params.Details) {
                  return <DetailsBody key={index} el={el} decodedPhoneNumber={decodedPhoneNumber} />;
               }
            })}
            <CatalogPDF />
            <Recommended data={data.data.recommends.nodes} />
         </div>
         <ContactUs />
      </div>
   );
}
export default Details;
