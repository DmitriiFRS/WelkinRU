"use client";

import PushData from "./PushData";
import styles from "../homepage.module.scss";
import { useEffect, useState } from "react";
import Popup from "./Popup";

function Inputs() {
   let scrollWidth: null | number = null;
   if (typeof window !== "undefined") {
      scrollWidth = window.innerWidth - document.body.clientWidth;
   }
   const [isPopupOpen, setPopupOpen] = useState(false);
   const [name, setName] = useState("");
   const [tel, setTel] = useState<string>("");
   const [question, setQuestion] = useState("");
   function throwData() {
      setPopupOpen(true);
   }

   useEffect(() => {
      if (isPopupOpen) {
         document.body.style.overflow = "hidden";
         document.body.style.paddingRight = `${scrollWidth}px`;
      } else {
         document.body.style.overflow = "auto";
         document.body.style.paddingRight = "0px";
      }
   }, [isPopupOpen, scrollWidth]);

   function changeTel(e: React.ChangeEvent<HTMLInputElement>) {
      if (!/^\d*$/.test(e.target.value)) return;
      if (e.target.value.length > 12) return;
      setTel(e.target.value);
   }
   return (
      <div className={styles.contactUs__inputsBody}>
         <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.contactUs__input}
            placeholder="ваше имя"
            type="text"
         />
         <input
            value={tel}
            name="phone"
            onChange={(e) => changeTel(e)}
            className={styles.contactUs__input}
            placeholder="ваш телефон"
            type="tel"
         />
         <textarea
            value={question}
            name="textarea"
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="ваш вопрос"
            className={styles.contactUs__inputArea}
         ></textarea>
         <PushData throwData={throwData} />
         <Popup isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen} />
      </div>
   );
}
export default Inputs;
