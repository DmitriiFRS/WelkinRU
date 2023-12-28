"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Breadcrumbs() {
   const router = usePathname();
   console.log(router);
   return (
      <div>
         <Link href={"/"}>Главная</Link>
         <span>{" / "}</span>
         <Link href={router}>{router === "/About" ? "О компании" : "Другое"}</Link>
      </div>
   );
}
export default Breadcrumbs;
