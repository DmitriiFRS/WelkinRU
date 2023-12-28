import styles from "./homepage.module.scss";
import Image from "next/image";
import pwr from "../../../public/img/homepage/pwr.jpg";
import rooftop from "../../../public/img/homepage/rooftop.jpg";
import vrf from "../../../public/img/homepage/vrf.jpg";
import chiller from "../../../public/img/homepage/chiller.jpg";
import Link from "next/link";

const equip = [
   {
      id: 0,
      title: "Приточно-вытяжная установка",
      img: pwr,
      className: styles.equip__pwr,
      imgClassName: styles.equip__pwrImg,
      gridArea: "pwr",
   },
   {
      id: 1,
      title: "Крышные кондиционеры",
      img: rooftop,
      className: styles.equip__rooftop,
      imgClassName: styles.equip__rooftopImg,
      gridArea: "rooftop",
   },
   {
      id: 2,
      title: "VRF Системы",
      img: vrf,
      className: styles.equip__vrf,
      imgClassName: styles.equip__vrfImg,
      gridArea: "vrf",
   },
   {
      id: 3,
      title: "Система чиллер-фанкойл",
      img: chiller,
      className: styles.equip__chiller,
      imgClassName: styles.equip__chillerImg,
      gridArea: "chiller",
   },
];

function Equip() {
   return (
      <div className={styles.equip}>
         <div className="container">
            <div className={styles.equip__titleBody}>
               <h2 className={styles.equip__title}>Наше оборудование</h2>
               <Link href="/Catalog">
                  <button className={styles.equip__catalog}>весь каталог</button>
               </Link>
            </div>
            <div className={styles.equip__itemsBody}>
               <div className={styles.equip__col1}>
                  <div className={styles.equip__pwrBody}>
                     <div className={styles.equip__itemTitleBody}>
                        <p className={styles.equip__itemTitle}>Приточно-вытяжная установка</p>
                        <p className={styles.equip__inCatalog}>в каталог</p>
                     </div>
                     <div className={styles.equip__pwrImg}>
                        <Image src={pwr} alt="pwr" fill />
                     </div>
                  </div>
               </div>
               <div className={styles.equip__col2}>
                  <div className={styles.equip__row1}>
                     <div className={styles.equip__rooftopBody}>
                        <div className={styles.equip__itemTitleBody}>
                           <p className={styles.equip__itemTitle}>Крышные кондиционеры</p>
                           <p className={styles.equip__inCatalog}>в каталог</p>
                        </div>
                        <div className={styles.equip__rooftopImgBody}>
                           <div className={styles.equip__rooftopImg}>
                              <Image src={rooftop} alt="rooftop" fill />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.equip__row2}>
                     <div className={styles.equip__vrfBody}>
                        <div className={styles.equip__itemTitleBody}>
                           <p className={styles.equip__itemTitle}>VRF Системы</p>
                           <p className={styles.equip__inCatalog}>в каталог</p>
                        </div>
                        <div className={styles.equip__vrfImgBody}>
                           <div className={styles.equip__vrfImg}>
                              <Image src={vrf} alt="vrf" fill />
                           </div>
                        </div>
                     </div>
                     <div className={styles.equip__chillerBody}>
                        <div className={styles.equip__itemTitleBody}>
                           <p className={styles.equip__itemTitle}>Система чиллер-фанкойл</p>
                           <p className={styles.equip__inCatalog}>в каталог</p>
                        </div>
                        <div className={styles.equip__chillerImgBody}>
                           <div className={styles.equip__chillerImg}>
                              <Image src={chiller} alt="chiller" fill />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Equip;
