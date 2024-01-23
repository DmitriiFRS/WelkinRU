import styles from "../catalog.module.scss";
import Image from "next/image";
import pdf from "../../../public/svg/pdf.svg";

function CatalogPDF() {
   return (
      <div className={styles.pdf}>
         <h2>Документация</h2>
         <a href="/catalog/catalog.pdf" download className={styles.pdf__pdfBody}>
            <Image src={pdf} alt="pdf" width={40} height={40} />
            <div className={styles.pdfBody__title}>Каталог Welkin</div>
         </a>
      </div>
   );
}
export default CatalogPDF;
