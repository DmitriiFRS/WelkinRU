import ContactUs from "../pg/Homepage/ContactUs/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import { fetchGraphqlData } from "../Utilities/FetchData";
import Questions from "./Questions";
import styles from "./faq.module.scss";

export async function generateMetadata() {
   const data = await fetchGraphqlData(
      `
      query {
         metadata {
           nodes {
             title {
               description
               title
             }
           }
         }
       }
    `
   );
   return {
      title: data.data.metadata.nodes[2].title.title,
      description: data.data.metadata.nodes[2].title.description,
   };
}

async function Faq() {
   const data = await fetchGraphqlData(`
   query {
      faqs {
         nodes {
           qa {
             question
             id
           }
         }
       }
    }
   `);
   return (
      <div className={styles.faq}>
         <div className="container">
            <Breadcrumbs />
            <Questions data={data.data.faqs.nodes} />
         </div>
         <ContactUs />
      </div>
   );
}
export default Faq;
