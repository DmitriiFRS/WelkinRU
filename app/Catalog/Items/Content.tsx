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
   const [isTransition, setTransition] = useState(false);
   const itemsPerPage = 9;
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;
   const currentItems = items.slice(firstItemIndex, lastItemIndex);
   function paginate(pageNumber: number) {
      if (isTransition) return;
      setTransition(true);
      setTimeout(() => {
         window.scrollTo({ top: 0 });
         setTransition(false);
         setCurrentPage(pageNumber);
      }, 500);
   }
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
