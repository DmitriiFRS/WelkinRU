"use client";
import styles from "./utilities.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function Breadcrumbs() {
   const router = usePathname();
   const titleRouter = ["Главная"];

   return (
      <div className={styles.breadcrumbs}>
         {router.split("/").map((el, index) => {
            if (el === "catalog") titleRouter.push("Каталог");
            else if (el === "faq") titleRouter.push("Вопрос-ответ");
            else if (el === "about") titleRouter.push("О компании");
            else if (el) titleRouter.push(el);
            console.log(titleRouter.length - 1);
            console.log(index);
            return (
               <div className={styles.breadcrumbs__link} key={index}>
                  <Link className={styles.breadcrumbs__linkInner} href={"/" + el}>
                     {titleRouter[index]}
                  </Link>
                  {titleRouter[index] ? <span>/</span> : ""}
               </div>
            );
         })}
      </div>
   );
}
export default Breadcrumbs;
