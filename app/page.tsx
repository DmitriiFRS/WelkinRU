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
       metadata {
         nodes {
           title {
             description
             title
           }
         }
       }
     }
   `
   );
   return {
      title: data.data.metadata.nodes[4].title.title,
      description: data.data.metadata.nodes[4].title.description,
   };
}

export default async function Home() {
   const data = await fetchGraphqlData(`
   query {
    previews {
      nodes {
        homepagePreview {
          title
          subtitle
          image {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    recommends {
      nodes {
        id
        productRecommended {
          name
          type
          href
          image {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    aboutHomepage {
      nodes {
        aboutCompany {
          title
          subtitle
        }
      }
    }
  }
   `);
   return (
      <div className={styles.main}>
         <Preview data={data.data.previews.nodes[0].homepagePreview} />
         <Equip />
         <Recommended data={data.data.recommends.nodes} />
         <About data={data.data.aboutHomepage.nodes[0].aboutCompany} />
         <ContactUs />
      </div>
   );
}
