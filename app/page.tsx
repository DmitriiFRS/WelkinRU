import About from "./Pages/Homepage/About";
import ContactUs from "./Pages/Homepage/ContactUs";
import Equip from "./Pages/Homepage/Equip";
import Preview from "./Pages/Homepage/Preview";
import Recommended from "./Pages/Homepage/Recommended";
import styles from "./page.module.scss";

export default function Home() {
   return (
      <div className={styles.main}>
         <Preview />
         <Equip />
         <Recommended />
         <About />
         <ContactUs />
      </div>
   );
}
