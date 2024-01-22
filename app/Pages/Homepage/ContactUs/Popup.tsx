import styles from "../homepage.module.scss";
import Image from "next/image";
import accept from "../../../../public/svg/accept.svg";
function Popup({ isPopupOpen, setPopupOpen }: { isPopupOpen: boolean; setPopupOpen: Function }) {
   function closePopup() {
      if (isPopupOpen) {
         setPopupOpen(false);
      }
   }

   return (
      <div
         onClick={closePopup}
         className={`${styles.popup} ${isPopupOpen ? styles.popup__active : styles.popup__hidden}`}
      >
         <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles.popup__body} ${isPopupOpen ? styles.popup__body__active : ""}`}
         >
            <div className={styles.popup__accept}>
               <Image src={accept} alt="accept" width={50} height={50} />
               <div>Заявка отправлена</div>
            </div>
            <button onClick={closePopup} className={`${styles.popup__btn} btnYellow`}>
               <span>Вернуться на сайт</span>
            </button>
         </div>
      </div>
   );
}
export default Popup;
