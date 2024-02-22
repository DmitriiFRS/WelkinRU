import ContactUs from "../pg/Homepage/ContactUs/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import Cols from "./Cols";
import Title from "./Title";
import styles from "./about.module.scss";
import { fetchGraphqlData } from "../Utilities/FetchData";

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
      title: data.data.metadata.nodes[0].title.title,
      description: data.data.metadata.nodes[0].title.description,
   };
}

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
