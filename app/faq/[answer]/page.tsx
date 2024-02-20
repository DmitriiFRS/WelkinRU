import { fetchGraphqlData } from "@/app/Utilities/FetchData";
import styles from "../faq.module.scss";
import Answer from "./Answer";
import Breadcrumbs from "@/app/Utilities/Breadcrumbs";

async function page({ params }: { params: { answer: string } }) {
   const data = await fetchGraphqlData(`
   query {
      faqs {
         nodes {
           id
           qa {
            id
             question
             answer
             answer2
             answer3
             answer4
           }
         }
       }
    }
   `);
   return (
      <div className={styles.answer}>
         <div className="container">
            <Breadcrumbs />
            <Answer data={data.data.faqs.nodes} answer={params.answer} />
         </div>
      </div>
   );
}
export default page;
