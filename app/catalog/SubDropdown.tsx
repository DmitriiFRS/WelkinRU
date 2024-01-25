import styles from "./catalog.module.scss";
import Image from "next/image";
import arrow from "../../public/svg/arrow.svg";
import { useState } from "react";
import Checkboxes from "../Utilities/Checkboxes";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

type Props = {
   id: number;
   title: string;
   checkbox: Array<string>;
   classname: string;
};
function SubDropdown({ el, index }: { el: Props; index: number }) {
   const [isActive, setActive] = useState(false);
   const checkboxes = useSelector((state: RootState) => state.mainReducer.equipCheckboxes);
   function toggleSubmenu() {
      setActive(!isActive);
   }
   return (
      <div
         key={el.id}
         className={`${styles.filter__itemBody} ${styles.filter__subItemBody} ${checkboxes[index] ? el.classname : ""}`}
      >
         <button className={styles.filter__item} onClick={toggleSubmenu}>
            <div>{el.title}</div>
            <Image
               className={`${styles.filter__arrowIcon} ${isActive ? styles.filter__arrowIcon__active : ""}`}
               src={arrow}
               alt="arrow"
            />
         </button>
         <div className={`${styles.filter__itemInner} ${isActive ? styles.filter__itemInner__active : ""}`}>
            <Checkboxes key={index} checkbox={el.checkbox} id={el.id} />
         </div>
      </div>
   );
}
export default SubDropdown;
