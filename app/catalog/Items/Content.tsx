import Pagination from "../Pagination";
import ContentInner from "./ContentInner";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

type ItemType = {
   attributes: {
      Name: string;
      Type: string;
      Reference: string;
      Image: any;
   };
};

type Props = {
   items: Array<ItemType>;
   paginate: (el: number) => void;
   currentPage: number;
   isTransition: boolean;
};

function Content({ items, paginate, currentPage, isTransition }: Props) {
   const media = useMediaQuery(1283);
   const itemsPerPage = media ? 8 : 9;
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
