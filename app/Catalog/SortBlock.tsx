"use client";

import styles from "./catalog.module.scss";
import Image from "next/image";
import sortIcon from "../../public/img/catalog/sortIcon.png";
import SortDropdown from "./SortDropdown";
import { useEffect, useState } from "react";

function SortBlock() {
   const [isActive, setActive] = useState(false);

   function closeDropdown() {
      setActive(false);
   }
   useEffect(() => {
      if (isActive) {
         window.addEventListener("scroll", closeDropdown);
         return () => {
            window.removeEventListener("scroll", closeDropdown);
         };
      }
   }, [isActive]);
   return (
      <div className={styles.cards__sortBlock}>
         <button className={styles.cards__sortBtn} onClick={() => setActive(!isActive)}>
            <Image src={sortIcon} alt="sort" />
            <span className={styles.cards__sortText}>Сортировка</span>
         </button>
         <SortDropdown isActive={isActive} />
      </div>
   );
}
export default SortBlock;
