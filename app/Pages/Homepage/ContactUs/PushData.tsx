import styles from "../homepage.module.scss";

function PushData({ throwData }: { throwData: any }) {
   return (
      <button onClick={throwData} className={`${styles.contactUs__btn} btnBlack`}>
         <span>Отправить</span>
      </button>
   );
}
export default PushData;
