import styles from "./header.module.scss";
import Image from "next/image";
import logo from "../../public/svg/logo.svg";
import Link from "next/link";
import { fetchGraphqlData } from "../Utilities/FetchData";
import MobileBlock from "./Mobile/MobileBlock";

export const list = [
   {
      id: 0,
      name: "Catalog",
      href: "/catalog",
   },
   {
      id: 1,
      name: "About us",
      href: "/about",
   },
   {
      id: 2,
      name: "FAQ",
      href: "/faq",
   },
];
async function Header() {
   const data = await fetchGraphqlData(`
   query {
      phones {
         nodes {
           phoneNumber {
             number
           }
         }
       }
    }
   `);
   const decodedPhoneNumber = decodeURI(data.data.phones.nodes[0].phoneNumber.number);
   return (
      <div className={`container ${styles.header}`}>
         <MobileBlock />
         <Link className={styles.header__logo} href={"/"}>
            <Image src={logo} alt="welkin" fill />
         </Link>
         <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
               {list.map((el) => {
                  return (
                     <li key={el.id} className={styles.header__item}>
                        <Link className={styles.header__itemLink} href={el.href === null ? "/" : el.href}>
                           {el.name}
                        </Link>
                     </li>
                  );
               })}
            </ul>
         </nav>
         <a href={"tel://" + decodedPhoneNumber} className={styles.header__tel}>
            <span>{data.data.phones.nodes[0].phoneNumber.number}</span>
         </a>
      </div>
   );
}
export default Header;
