"use client";
import styles from "./utilities.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function Breadcrumbs() {
   const router = usePathname();

   useEffect(() => {
      console.log(router.split("/"));
   }, []);

   return (
      <div className={styles.breadcrumbs}>
         <Link className={styles.breadcrumbs__link} href={"/"}>
            Главная
         </Link>
         <span>{" / "}</span>
         {router.split("/").map((el, index) => {
            if (el === "Catalog") el = "Каталог";
            if (el === "faq") el = "Вопрос-ответ";
            if (el === "About") el = "О компании";
            return (
               <Link className={styles.breadcrumbs__link} key={index} href={"/" + el}>
                  {index > 1 ? " / " + el : el}
               </Link>
            );
         })}
      </div>
   );
}
export default Breadcrumbs;
