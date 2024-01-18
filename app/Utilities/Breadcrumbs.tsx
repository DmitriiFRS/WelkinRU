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
         <Link href={"/"}>Главная</Link>
         <span>{" / "}</span>
         {router.split("/").map((el, index) => {
            return (
               <Link key={index} href={"/" + el}>
                  {el}
               </Link>
            );
         })}
      </div>
   );
}
export default Breadcrumbs;
