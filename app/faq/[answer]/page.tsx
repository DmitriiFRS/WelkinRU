import { fetchGraphqlData } from "@/app/Utilities/FetchData";
import styles from "../faq.module.scss";
import Answer from "./Answer";
import Breadcrumbs from "@/app/Utilities/Breadcrumbs";

async function page({ params }: { params: { answer: string } }) {
   const data = await fetchGraphqlData(`
   query {
      answers {
        data {
         id
          attributes {
            question
            answer
            answer2
            answer3
            answer4
            answer5
          }
        }
      }
    }
   `);
   console.log(data.data.answers.data);
   return (
      <div className={styles.answer}>
         <div className="container">
            <Breadcrumbs />
            <Answer data={data.data.answers.data} answer={params.answer} />
         </div>
      </div>
   );
}
export default page;
