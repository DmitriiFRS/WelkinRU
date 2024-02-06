import { fetchGraphqlData } from "@/app/Utilities/FetchData";
import styles from "../faq.module.scss";
import Answer from "./Answer";
import Breadcrumbs from "@/app/Utilities/Breadcrumbs";

async function page({ params }: { params: { answer: string } }) {
   const data = await fetchGraphqlData(`
   query {
      questions {
        data {
          id
          attributes {
            Question
            Answer
            Answer2
            Answer3
            Answer4
            Answer5
          }
        }
      }
    }
   `);
   return (
      <div className={styles.answer}>
         <div className="container">
            <Breadcrumbs />
            <Answer data={data.data.questions.data} answer={params.answer} />
         </div>
      </div>
   );
}
export default page;
