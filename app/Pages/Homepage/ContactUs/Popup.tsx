import styles from "../homepage.module.scss";
import Image from "next/image";
import accept from "../../../../public/svg/accept.svg";
function Popup() {
   return (
      <div className={styles.popup}>
         <div className={styles.popup__body}>
            <div className={styles.popup__accept}>
               <Image src={accept} alt="accept" width={50} height={50} />
               <div>Заявка отправлена</div>
            </div>
            <button className={`${styles.popup__btn} btnYellow`}>
               <span>Вернуться на сайт</span>
            </button>
         </div>
      </div>
   );
}
export default Popup;
