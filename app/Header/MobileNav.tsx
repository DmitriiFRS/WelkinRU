import styles from "./header.module.scss";
import { list } from "./Header";
import Link from "next/link";

function MobileNav({ isActive, setActive }: { isActive: boolean; setActive: (el: boolean) => void }) {
   return (
      <div className={`${styles.header__mobileNav} ${isActive ? styles.header__mobileNav__active : ""}`}>
         <ul className={styles.header__list__mobile}>
            {list.map((el) => {
               return (
                  <li key={el.id} className={styles.header__item__mobile}>
                     <Link
                        onClick={() => setActive(false)}
                        className={styles.header__itemLink__mobile}
                        href={el.href === null ? "/" : el.href}
                     >
                        {el.name}
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
export default MobileNav;
