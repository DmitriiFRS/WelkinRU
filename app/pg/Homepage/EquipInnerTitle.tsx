import styles from "./homepage.module.scss";
import Image from "next/image";
import arrow from "../../../public/svg/next.svg";

const style = {};

function EquipInnerTitle({ title, style }: { title: string; style: string }) {
   return (
      <div className={style}>
         <div className={styles.equip__innerTitle}>{title}</div>
         <div className={styles.equip__innerSubtitleBody}>
            <div className={styles.equip__innerinCatalog}>В каталог</div>
            <Image className={styles.equip__innerNext} src={arrow} alt="next" />
         </div>
      </div>
   );
}
export default EquipInnerTitle;
