"use client";

import PushData from "./PushData";
import styles from "../homepage.module.scss";
import { useState } from "react";

function Inputs() {
   const [name, setName] = useState("");
   const [tel, setTel] = useState<string>("");
   const [question, setQuestion] = useState("");
   function throwData() {}

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
      </div>
   );
}
export default Inputs;
