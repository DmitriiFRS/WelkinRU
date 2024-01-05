import styles from "./catalog.module.scss";

type PaginationProps = {
   itemsPerPage: number;
   totalItems: number;
   paginate: (pageNumber: number) => void;
   currentPage: number;
};

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }: PaginationProps) {
   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
   }
   return (
      <ul className={styles.pagination}>
         {pageNumbers.map((el, index) => {
            return (
               <li
                  className={`${styles.pagination__item} ${el === currentPage ? styles.pagination__item__active : ""}`}
                  key={el}
               >
                  <button onClick={() => paginate(el)}>{el}</button>
               </li>
            );
         })}
      </ul>
   );
}
export default Pagination;
