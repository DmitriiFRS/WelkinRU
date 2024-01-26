import ContactUs from "../Pages/Homepage/ContactUs/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import { fetchGraphqlData } from "../Utilities/FetchData";
import Questions from "./Questions";
import styles from "./faq.module.scss";

export const metadata = {
   title: "Вопрос-ответ",
   description: "Часто задаваемые вопросы",
};

async function Faq() {
   const data = await fetchGraphqlData(`
   query {
      answers {
        data {
         id
          attributes {
            question
          }
        }
      }
    }
   `);
   return (
      <div className={styles.faq}>
         <div className="container">
            <Breadcrumbs />
            <Questions data={data.data.answers.data} />
         </div>
         <ContactUs />
      </div>
   );
}
export default Faq;
