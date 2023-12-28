import styles from "./header.module.scss";
import Image from "next/image";
import logo from "../../public/svg/logo.svg";
import arrow from "../../public/svg/arrow.svg";
import Link from "next/link";

const list = [
   {
      id: 0,
      name: "Каталог",
      icon: arrow,
   },
   {
      id: 1,
      name: "О компании",
   },
   {
      id: 2,
      name: "Вопрос-ответ",
   },
   {
      id: 3,
      name: "Контакты",
   },
];

function Header() {
   return (
      <div className={`container ${styles.header}`}>
         <div className={styles.header__logo}>
            <Image src={logo} alt="welkin" fill />
         </div>
         <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
               {list.map((el) => {
                  if (el.icon) {
                     return (
                        <li key={el.id} className={styles.header__item}>
                           <span>{el.name}</span>
                           <Image className={styles.header__arrow} src={el.icon} alt="icon" width={12} height={6} />
                        </li>
                     );
                  } else
                     return (
                        <li key={el.id} className={styles.header__item}>
                           <Link className={styles.header__itemLink} href={"/About"}>
                              {el.name}
                           </Link>
                        </li>
                     );
               })}
            </ul>
         </nav>
         <button className={styles.header__tel}>
            <span>+998 97 333 63 57</span>
         </button>
      </div>
   );
}
export default Header;
