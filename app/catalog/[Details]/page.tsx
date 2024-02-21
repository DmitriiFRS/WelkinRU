import Breadcrumbs from "@/app/Utilities/Breadcrumbs";
import styles from "../catalog.module.scss";
import Recommended from "@/app/pg/Homepage/Recommended";
import ContactUs from "@/app/pg/Homepage/ContactUs/ContactUs";
import { fetchGraphqlData } from "@/app/Utilities/FetchData";
import DetailsBody, { DataType } from "./DetailsBody";
import CatalogPDF from "./CatalogPDF";

type MetadataType = {
   productCard: {
      title: string;
      type: string;
      href: string;
   };
};

export async function generateMetadata({ params }: { params: { Details: string } }) {
   const item = await fetchGraphqlData(`
    query {
      products {
      nodes {
        productCard {
          title
          type
          href
          metaDescription
      }
    }
  }
}
  `);
   const searchItem = item.data.products.nodes.find(
      (el: MetadataType) => el.productCard.href.replace(/\s|\//g, "_") === params.Details
   );
   return {
      title: searchItem.productCard.title,
      description: searchItem.productCard.metaDescription,
   };
}

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
          hp
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
