import ContactUs from "../pg/Homepage/ContactUs/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import { fetchGraphqlData } from "../Utilities/FetchData";
import Questions from "./Questions";
import styles from "./faq.module.scss";

export async function generateMetadata() {
   const data = await fetchGraphqlData(
      `
      query {
         metaFaq {
           data {
             attributes {
               title
               description
             }
           }
         }
       }
    `
   );
   return {
      title: data.data.metaFaq.data.attributes.title,
      description: data.data.metaFaq.data.attributes.description,
   };
}

async function Faq() {
   const data = await fetchGraphqlData(`
   query {
      questions {
        data {
         id
          attributes {
            Question
          }
        }
      }
    }
   `);
   return (
      <div className={styles.faq}>
         <div className="container">
            <Breadcrumbs />
            <Questions data={data.data.questions.data} />
         </div>
         <ContactUs />
      </div>
   );
}
export default Faq;
