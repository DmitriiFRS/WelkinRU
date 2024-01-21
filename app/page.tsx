import About from "./Pages/Homepage/About";
import ContactUs from "./Pages/Homepage/ContactUs/ContactUs";
import Equip from "./Pages/Homepage/Equip";
import Preview from "./Pages/Homepage/Preview";
import Recommended from "./Pages/Homepage/Recommended";
import { fetchGraphqlData } from "./Utilities/FetchData";
import styles from "./page.module.scss";

export default async function Home() {
   const data = await fetchGraphqlData(`
   query {
      maintitle {
            data {
              attributes {
                title,
                description,
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
      recommended(id: 1) {
            data {
              attributes {
                produkties {
                  data {
                    id,
                    attributes {
                      name,
                      type,
                      reference
                      image {
                         data {
                           attributes {
                             url
                           }
                         }
                       }
                    }
                  }
                }
              }
            }
          }
      about {
        data {
          attributes {
            title,
            description
          }
        }
      }
    }
   `);
   return (
      <div className={styles.main}>
         <Preview data={data.data.maintitle} />
         <Equip />
         <Recommended data={data.data.recommended.data.attributes.produkties.data} />
         <About data={data.data.about.data.attributes} />
         <ContactUs />
      </div>
   );
}
