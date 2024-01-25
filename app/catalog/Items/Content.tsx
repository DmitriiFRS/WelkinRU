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

type Props = {
   items: Array<ItemType>;
   paginate: (el: number) => void;
   currentPage: number;
   isTransition: boolean;
};

function Content({ items, paginate, currentPage, isTransition }: Props) {
   const itemsPerPage = 9;
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;
   const currentItems = items.slice(firstItemIndex, lastItemIndex);

   return (
      <>
         <ContentInner items={currentItems} isTransition={isTransition} />
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
