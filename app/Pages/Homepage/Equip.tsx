import styles from "./homepage.module.scss";
import Image from "next/image";
import pwr from "../../../public/img/homepage/pwr.jpg";
import rooftop from "../../../public/img/homepage/rooftop.jpg";
import vrf from "../../../public/img/homepage/vrf.jpg";
import chiller from "../../../public/img/homepage/chiller.jpg";
import Link from "next/link";
import EquipInnerTitle from "./EquipInnerTitle";

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
               <Link
                  href={{
                     pathname: "/Catalog=pwr",
                  }}
                  className={styles.equip__item1}
               >
                  <EquipInnerTitle title={"Приточно-вытяжная установка"} style={styles.equip__innerTitleBody} />
                  <div className={styles.equip__item1__imgBody}>
                     <Image src={pwr} alt="ПВУ" fill />
                  </div>
               </Link>
               <div className={styles.equip__item2}>
                  <EquipInnerTitle title={"Крышные кондиционеры"} style={styles.equip__innerTitleBody2} />
                  <div className={styles.equip__item2__imgBody}>
                     <Image src={rooftop} alt="rooftop" fill />
                  </div>
               </div>
               <div className={styles.equip__item3}>
                  <div className={styles.equip__item3__subitem1}>
                     <EquipInnerTitle title={"WRV Системы"} style={styles.equip__innerTitleBody3} />
                     <div className={styles.equip__item3__subitem1__imgBody}>
                        <Image src={vrf} alt="vrf" fill />
                     </div>
                  </div>
                  <div className={styles.equip__item3__subitem2}>
                     <EquipInnerTitle title={"Система чиллер-фанкойл"} style={styles.equip__innerTitleBody4} />
                     <div className={styles.equip__item3__subitem2__imgBody}>
                        <Image src={chiller} alt="vrf" fill />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Equip;
