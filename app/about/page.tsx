import { Metadata } from "next/types";
import ContactUs from "../Pages/Homepage/ContactUs/ContactUs";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import Cols from "./Cols";
import Title from "./Title";
import styles from "./about.module.scss";

export const metadata: Metadata = {
   title: "О компании",
   description: "Короткое описание компании Welkin",
};

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
