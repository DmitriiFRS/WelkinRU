import ContactUs from "../pg/Homepage/ContactUs/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import Cols from "./Cols";
import Title from "./Title";
import styles from "./about.module.scss";
import { fetchGraphqlData } from "../Utilities/FetchData";

/*export async function generateMetadata() {
   const data = await fetchGraphqlData(
      `
      query {
         metaAbout {
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
      title: data.data.metaAbout.data.attributes.title,
      description: data.data.metaAbout.data.attributes.description,
   };
}*/

function page() {
   return (
      <div className={styles.about}>
         <div className={`container ${styles.about__container}`}>
            <Breadcrumbs />
            <Title />
            <Cols />
         </div>
         <ContactUs />
      </div>
   );
}
export default page;
