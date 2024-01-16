"use client";

import { useState } from "react";
import Pagination from "../Pagination";
import ContentInner from "./ContentInner";

type ItemType = {
   attributes: {
      name: string;
      type: string;
      reference: string;
      image: any;
   };
};

type Props = Array<ItemType>;

function Content({ items }: { items: Props }) {
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
