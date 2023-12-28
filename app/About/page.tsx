import ContactUs from "../Pages/Homepage/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import Cols from "./Cols";
import Title from "./Title";
import styles from "./about.module.scss";

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
