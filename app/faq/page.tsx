import ContactUs from "../Pages/Homepage/ContactUs/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import Questions from "./Questions";
import styles from "./faq.module.scss";

function Faq() {
   return (
      <div className={styles.faq}>
         <div className="container">
            <Breadcrumbs />
            <Questions />
         </div>
         <ContactUs />
      </div>
   );
}
export default Faq;
