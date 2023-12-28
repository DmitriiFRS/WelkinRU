import Breadcrumbs from "../Utilities/Breadcrumbs";
import Title from "./Title";
import styles from "./about.module.scss";

function page() {
   return (
      <div className={styles.about}>
         <div className={`container ${styles.about__container}`}>
            <Breadcrumbs />
            <Title />
         </div>
      </div>
   );
}
export default page;
