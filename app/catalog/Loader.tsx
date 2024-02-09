import styles from "./catalog.module.scss";

function Loader() {
   return (
      <div className={styles.ldsRingContainer}>
         <div className={styles.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
}
export default Loader;
