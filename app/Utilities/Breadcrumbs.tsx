"use client";
import styles from "./utilities.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Breadcrumbs() {
   const paths = usePathname();
   const pathNames = paths.split("/").filter((path) => path);
   const titleRouter = ["Главная"];
   return (
      <div className={styles.breadcrumbs}>
         {paths.split("/").map((el, index) => {
            let href = `/${pathNames.slice(0, index).join("/")}`;
            if (el === "catalog") titleRouter.push("Каталог");
            else if (el === "faq") titleRouter.push("Вопрос-ответ");
            else if (el === "about") titleRouter.push("О компании");
            else if (el) titleRouter.push(el);
            return (
               <div className={styles.breadcrumbs__link} key={index}>
                  <Link className={styles.breadcrumbs__linkInner} href={href}>
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
