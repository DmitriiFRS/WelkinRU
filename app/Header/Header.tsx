import styles from "./header.module.scss";
import Image from "next/image";
import logo from "../../public/svg/logo.svg";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { fetchGraphqlData } from "../Utilities/FetchData";
import MobileBlock from "./Mobile/MobileBlock";

export const list = [
   {
      id: 0,
      name: "Каталог",
      href: "/catalog",
   },
   {
      id: 1,
      name: "О компании",
      href: "/about",
   },
   {
      id: 2,
      name: "Вопрос-ответ",
      href: "/faq",
   },
];
async function Header() {
   const data = await fetchGraphqlData(`
   query {
      phone {
        data {
          attributes {
            header
          }
        }
      }
    }
   `);
   const decodedPhoneNumber = decodeURI(data.data.phone.data.attributes.header);
   return (
      <div className={`container ${styles.header}`}>
         <MobileBlock />
         <Link className={styles.header__logo} href={"/"}>
            <Image src={logo} alt="welkin" fill />
         </Link>
         <nav className={styles.header__nav}>
            <Dropdown />
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
            <span>{data.data.phone.data.attributes.header}</span>
         </a>
      </div>
   );
}
export default Header;
