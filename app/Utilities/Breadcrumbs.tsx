"use client";
import styles from "./utilities.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Breadcrumbs() {
   const router = usePathname();
   return (
      <div className={styles.breadcrumbs}>
         <Link href={"/"}>Главная</Link>
         <span>{" / "}</span>
         <Link href={router}>{router === "/About" ? "О компании" : router === "/faq" ? "Вопрос-ответ" : "Другое"}</Link>
      </div>
   );
}
export default Breadcrumbs;
