"use client";

import { useState } from "react";
import styles from "../catalog.module.scss";
import Image from "next/image";
import Pagination from "../Pagination";
import ContentInner from "./ContentInner";

type ContentProps = {
   id: number;
   img: any;
   name: string;
   type: string;
};

function Content({ items }: { items: Array<ContentProps> }) {
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 6;
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;
   const currentItems = items.slice(firstItemIndex, lastItemIndex);
   function paginate(pageNumber: number) {
      setCurrentPage(pageNumber);
   }
   return (
      <>
         <ContentInner items={currentItems} />
         <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={items.length}
            paginate={paginate}
            currentPage={currentPage}
         />
      </>
   );
}
export default Content;
