import About from "./pg/Homepage/About";
import ContactUs from "./pg/Homepage/ContactUs/ContactUs";
import Equip from "./pg/Homepage/Equip";
import Preview from "./pg/Homepage/Preview";
import Recommended from "./pg/Homepage/Recommended";
import { fetchGraphqlData } from "./Utilities/FetchData";
import styles from "./page.module.scss";

export async function generateMetadata() {
   const data = await fetchGraphqlData(
      `
    query {
      metaHomepage {
        data {
          attributes {
            title
            description
          }
        }
      }
    }
    `
   );
   return {
      title: data.data.metaHomepage.data.attributes.title,
      description: data.data.metaHomepage.data.attributes.description,
   };
}

export default async function Home() {
   const data = await fetchGraphqlData(`
   query {
    maintitle {
      data {
        attributes {
          Title
          Description
          Image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    recommended(id:2) {
       data {
        attributes {
          recom {
            data {
              id
              attributes {
                Name
                Type
                Reference
                Image {
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
          Title
          Description
        }
      }
    }
  }
   `);
   return (
      <div className={styles.main}>
         <Preview data={data.data.maintitle} />
         <Equip />
         <Recommended data={data.data.recommended.data.attributes.recom.data} />
         <About data={data.data.about.data.attributes} />
         <ContactUs />
      </div>
   );
}
