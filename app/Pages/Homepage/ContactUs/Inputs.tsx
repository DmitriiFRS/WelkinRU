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
   const [nameIsDirty, setNameIsDirty] = useState(false);
   const [telIsDirty, setTelIsDirty] = useState(false);
   const [textIsDirty, setTextIsDirty] = useState(false);
   const [name, setName] = useState("");
   const [tel, setTel] = useState<string>("");
   const [question, setQuestion] = useState("");
   function throwData() {
      if (!name || !tel || !question) {
         if (!name) {
            setNameIsDirty(true);
         }
         if (!tel) {
            setTelIsDirty(true);
         }
         if (!question) {
            setTextIsDirty(true);
         }
      } else {
         setPopupOpen(true);
         setName("");
         setTel("");
         setQuestion("");
      }
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
   function clearDirtyStatus() {
      setNameIsDirty(false);
      setTelIsDirty(false);
      setTextIsDirty(false);
   }
   return (
      <div className={styles.contactUs__inputsBody}>
         <input
            onFocus={clearDirtyStatus}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${styles.contactUs__input} ${nameIsDirty ? styles.contactUs__input__dirty : ""}`}
            placeholder="ваше имя"
            type="text"
         />
         <input
            onFocus={clearDirtyStatus}
            value={tel}
            name="phone"
            onChange={(e) => changeTel(e)}
            className={`${styles.contactUs__input} ${telIsDirty ? styles.contactUs__input__dirty : ""}`}
            placeholder="ваш телефон"
            type="tel"
         />
         <textarea
            onFocus={clearDirtyStatus}
            value={question}
            name="textarea"
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="ваш вопрос"
            className={`${styles.contactUs__inputArea} ${textIsDirty ? styles.contactUs__inputArea__dirty : ""}`}
         ></textarea>
         <div
            className={`${styles.contactUs__dirtyField} ${
               nameIsDirty || telIsDirty || textIsDirty ? styles.contactUs__dirtyField__active : ""
            }`}
         >
            Заполните все поля
         </div>
         <PushData throwData={throwData} />
         <Popup isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen} />
      </div>
   );
}
export default Inputs;
