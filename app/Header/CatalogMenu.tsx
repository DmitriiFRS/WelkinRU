"use client";

import { useDispatch, useSelector } from "react-redux";
import { closeHeaderDropDown, openHeaderDropDown } from "../Redux/main.slice";
import { RootState } from "../Redux/store";
import styles from "./header.module.scss";
import Image from "next/image";

type CatalogMenuProps = {
   id: number;
   name: string;
   icon?: any;
   href: string | null;
};

function CatalogMenu({ el }: { el: CatalogMenuProps }) {
   const dispatch = useDispatch();
   function openDropdown() {
      dispatch(openHeaderDropDown());
   }
   function closeDropdown() {
      dispatch(closeHeaderDropDown());
   }
   return (
      <li key={el.id} className={styles.header__item} onMouseOver={openDropdown} onMouseLeave={closeDropdown}>
         <div>{el.name}</div>
         <Image className={styles.header__arrow} src={el.icon} alt="icon" width={12} height={6} />
      </li>
   );
}
export default CatalogMenu;
