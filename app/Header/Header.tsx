import styles from "./header.module.scss";
import Image from "next/image";
import logo from "../../public/svg/logo.svg";
import arrow from "../../public/svg/arrow.svg";
import Link from "next/link";
import CatalogMenu from "./CatalogMenu";
import Dropdown from "./Dropdown";
import { fetchGraphqlData } from "../Utilities/FetchData";

const list = [
   {
      id: 0,
      name: "Каталог",
      icon: arrow,
      href: null,
   },
   {
      id: 1,
      name: "О компании",
      href: "/About",
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
   return (
      <div className={`container ${styles.header}`}>
         <Link className={styles.header__logo} href={"/"}>
            <Image src={logo} alt="welkin" fill />
         </Link>
         <nav className={styles.header__nav}>
            <Dropdown />
            <ul className={styles.header__list}>
               {list.map((el) => {
                  if (el.icon) {
                     return <CatalogMenu key={el.id} el={el} />;
                  } else
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
         <button className={styles.header__tel}>
            <span>{data.data.phone.data.attributes.header}</span>
         </button>
      </div>
   );
}
export default Header;
