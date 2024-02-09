import styles from "./header.module.scss";
import close from "../../public/svg/close.svg";
import Image from "next/image";
import { useEffect } from "react";

function Burger({ isActive, setActive }: { isActive: boolean; setActive: (el: boolean) => void }) {
   let scrollWidth: null | number = null;
   if (typeof window !== "undefined") {
      scrollWidth = window.innerWidth - document.body.clientWidth;
   }
   useEffect(() => {
      if (isActive) {
         document.body.style.overflow = "hidden";
         document.body.style.paddingRight = `${scrollWidth}px`;
      } else {
         document.body.style.overflow = "auto";
         document.body.style.paddingRight = "0px";
      }
   }, [isActive, scrollWidth]);
   function closeMenu() {
      setActive(false);
   }
   useEffect(() => {
      window.addEventListener("resize", closeMenu);
      return () => {
         window.removeEventListener("resize", closeMenu);
      };
   }, [isActive]);
   function toggleMenu() {
      setActive(!isActive);
   }
   return (
      <button aria-label="Меню" onClick={toggleMenu} className={styles.burger}>
         <div className={`${styles.burger__lines} ${isActive ? styles.burger__lines__unactive : ""}`}>
            <span></span>
            <span></span>
            <span></span>
         </div>
         <Image
            className={`${styles.burger__close} ${isActive ? styles.burger__close__active : ""}`}
            src={close}
            alt="close"
            width={40}
            height={40}
         />
      </button>
   );
}
export default Burger;
