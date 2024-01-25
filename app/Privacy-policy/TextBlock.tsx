import { TypeInnerBlock } from "./page";
import styles from "./privacy.module.scss";

function TextBlock({ content }: { content: TypeInnerBlock }) {
   return (
      <div className={styles.text}>
         <h3 className={styles.text__title}>{content.title}</h3>
         {content.subtitles.map((el, index) => {
            return (
               <div key={index} className={styles.text__main}>
                  <div className={styles.text__main__title}>{el.main}</div>
                  {el.listItem &&
                     el.listItem.map((el, index) => {
                        return (
                           <li key={index} className={styles.text__main__item}>
                              {el}
                           </li>
                        );
                     })}
               </div>
            );
         })}
      </div>
   );
}
export default TextBlock;
