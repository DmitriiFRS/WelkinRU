"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Redux/store";
import { closeHeaderDropDown, openHeaderDropDown } from "../Redux/main.slice";
import { useState } from "react";
const list = [
   {
      id: 0,
      title: "Крышные кондиционеры",
      link: "/Catalog",
   },
   {
      id: 1,
      title: "Чиллеры",
      link: "/Catalog",
   },
   {
      id: 2,
      title: "WRV системы",
      link: "/Catalog",
   },
   {
      id: 3,
      title: "Фанкойлы",
      link: "/Catalog",
   },
   {
      id: 4,
      title: "Приточно-вытяжная установка",
      link: "/Catalog",
   },
];

function DropDown() {
   const dispatch = useDispatch();
   const [inTransition, setTransition] = useState(false);
   function openDropdown() {
      if (inTransition) return;
      else dispatch(openHeaderDropDown());
   }
   function closeDropdown() {
      if (inTransition) return;
      dispatch(closeHeaderDropDown());
      setTransition(true);
      setTimeout(() => {
         setTransition(false);
      }, 500);
   }
   const isDropdownActive = useSelector((state: RootState) => state.mainReducer.isHeaderDropdownActive);
   return (
      <div
         className={`${styles.dropdown} ${isDropdownActive ? styles.dropdown__active : ""}`}
         onMouseOver={openDropdown}
         onMouseLeave={closeDropdown}
      >
         <ul>
            {list.map((el) => {
               return (
                  <li key={el.id} className={styles.dropdown__item}>
                     <Link style={{ color: "inherit" }} href={el.link}>
                        {el.title}
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
export default DropDown;
