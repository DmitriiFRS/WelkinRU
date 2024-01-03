import Breadcrumbs from "../Utilities/Breadcrumbs";
import TextBlock from "./TextBlock";
import styles from "./privacy.module.scss";

type TypeSubtitlesInner = {
   main: string;
   listItem?: Array<string>;
};

export type TypeInnerBlock = {
   title: string;
   subtitles: Array<TypeSubtitlesInner>;
};

type TypeTextBlock = Array<TypeInnerBlock>;

const textBlock: TypeTextBlock = [
   {
      title: "1. Общие положения",
      subtitles: [
         {
            main: "1.1. Настоящая Политика в отношении обработки и защиты персональных данных (далее — Политика) разработана в соответствии со статьей 18.1 Федерального закона от 27.07.2006 года № 152-ФЗ «О персональных данных» и является внутренним документом ООО «УРБАН-ГРУПП» (далее — Общество), регулирующим его деятельность в области обработки и защиты персональных данных, оператором которых является Общество.",
         },
         {
            main: "1.2. Политика разработана в целях реализации требований законодательства Российской Федерации в области обработки и защиты персональных данных и направлена на обеспечение защиты прав и свобод человека и гражданина при обработке его персональных данных в Обществе, в том числе защиты прав на неприкосновенность частной жизни, личной и семейной тайн.",
         },
         {
            main: "1.3. Действие настоящей Политики распространяется на любую информацию о пользователе, полученную Обществом, как до, так и после утверждения Политики.",
         },
         {
            main: "1.4. Действие настоящей Политики распространяется на всю информацию, которую Общество может получить о пользователе во время использования им сайта welkingroup.ru (далее — Сайт).",
         },
         {
            main: "1.5. Посещение и использование Сайта означает безоговорочное согласие пользователя:",
            listItem: [
               "на обработку его персональных данных, указанных статье 2 настоящей Политики;",
               "с условиями обработки его персональных данных, содержащимися в настоящей Политике.",
            ],
         },
         {
            main: "1.6. В случае несогласия с условиями обработки персональных данных в Обществе, пользователь должен прекратить использование Сайта.",
         },
         {
            main: "1.7. Настоящая Политика применяется только к сайту welkingroup.ru Общество не контролирует и не несет ответственности за сбор и обработку персональных данных третьими лицами, на сайты которых пользователь может перейти по ссылкам, доступным на сайте welkingroup.ru",
         },
         {
            main: "1.8. Общество не осуществляет проверку достоверности персональных данных, предоставленных пользователем.",
         },
      ],
   },
   {
      title: "2. Состав получаемых и обрабатываемых персональных данных",
      subtitles: [
         {
            main: "2.1. Данные о пользователе, получаемые и обрабатываемые в рамках настоящей Политики поступают в Общество следующими способами:",
         },
         {
            main: "2.1.1. Предоставляются самим пользователем на Сайте путём:",
            listItem: [
               "заполнения регистрационной формы и включают в себя следующую информацию: фамилия, имя, адрес электронной почты (email);",
               "заполнения данных пользователя в личном кабинете и включают в себя следующую информацию: фамилия, имя, отчество, номер телефона, адрес электронной почты (email), почтовом адресе;",
               "заполнения формы оформления заказа и включают в себя следующую информацию: фамилия, имя, отчество, номер телефона, адрес электронной почты (email), почтовом адресе;",
               "заполнения формы подписки на новостную рассылку и включают в себя информацию об адресе электронной почты;",
               "заполнения формы обратной связи и включают в себя следующую информацию: имя, адрес электронной почты (email), номер телефона;",
               "заполнения формы обратного звонка и включают в себя информацию о номере телефона;",
               "заполнения формы запроса на расчет стоимости услуг Общества и включают в себя следующую информацию: имя, номер телефона, адрес электронной почты (email);",
               "связи с Обществом посредством направления письменной корреспонденции на почтовые адреса Общества, по номерам телефонов, адресам электронной почты, указанным на Сайте и любыми другими способами и могут включать в себя следующую информацию: Ф.И.О., почтовый адрес, место проживания, контактный телефон, адрес электронной почты (e-mail) и иную информацию на усмотрение пользователя.",
            ],
         },
         {
            main: "2.1.2. Автоматически передаются Обществу в процессе посещения и использования Сайта с помощью установленного на устройстве пользователя программного обеспечения, в том числе: IP-адрес, информация из cookie, информация о браузере пользователя (или иной программе, с помощью которой осуществляется доступ к сайту), время доступа, адрес запрашиваемой страницы.",
         },
      ],
   },
   {
      title: "3. Цели сбора и обработки персональных данных",
      subtitles: [
         {
            main: "3.1. Сбор и обработка персональных данных пользователя Обществом осуществляется в следующих целях:",
         },
         {
            main: "3.1.1. Заключение договоров на продажу товаров (оказание услуг) пользователю от имени Общества и (или) партнеров Общества.",
         },
         {
            main: "3.1.2. Связь с пользователем в случае необходимости, в том числе направление уведомлений, запросов и информации, связанных с использованием Сайта, исполнением заказов на приобретение товаров и оказание услуг Обществом, а также обработка запросов и заявок от пользователя;",
         },
         {
            main: "3.1.3. Предоставление пользователю эффективной клиентской и технической поддержки при возникновении проблем, связанных с использованием Сайта, оказанием услуг Обществом и (или) партнерами Общества;",
         },
         {
            main: "3.1.4. Повышение качества Сайта, удобства его использования;",
         },
         {
            main: "3.1.5. Предоставление пользователю, с его согласия, персональных услуг, специальных предложений, информации о ценах, новостной рассылки и иных сведений от имени Общества и (или) от имени партнеров Общества;",
         },
         {
            main: "3.1.6. Осуществления рекламной деятельности с согласия пользователя;",
         },
         {
            main: "3.1.7. Проведение статистических и иных исследований на основе обезличенных данных.",
         },
      ],
   },
   {
      title: "4. Предоставление доступа к персональным данным",
      subtitles: [
         {
            main: "4.1. Общество обеспечивает сохранность персональных данных пользователей.",
         },
         {
            main: "4.2. Обрабатываемые персональные данные уничтожаются либо обезличиваются Обществом по достижении целей обработки или в случае утраты необходимости в достижении этих целей, а так же при отзыве Пользователем согласия на обработку персональных данных.",
         },
         {
            main: "4.3. Пользователь вправе в любой момент отозвать согласие на обработку Обществом персональных данных путём направления письменного уведомления на адрес: Москва, Строительный пр-д, 7а, корп. 30, с пометкой «отзыв согласия на обработку персональных данных». Отзыв пользователем согласия на обработку персональных данных влечёт за собой уничтожение записей, содержащих персональные данные, в системах обработки персональных данных Общества.",
         },
         {
            main: "4.4. В отношении персональных данных пользователя сохраняется их конфиденциальность, кроме случаев, установленных в п. 4.5. настоящей Политики.",
         },
         {
            main: "4.5. Общество вправе передать персональные данные пользователя третьим лицам в следующих случаях:",
         },
         {
            main: "4.5.1. Пользователь явным образом выразил свое согласие на передачу своих персональных данных;",
         },
         {
            main: "4.5.2. Передача персональных данных необходима для оказания определенной услуги пользователю Обществом или партнерами Общества (транспортными компаниями, платежными сервисами и.т.д.). При этом обеспечивается конфиденциальность персональной информации, а пользователь уведомляется о такой передаче;",
         },
         {
            main: "4.5.3. Передача предусмотрена российским или иным применимым законодательством в рамках установленной процедуры (по решению суда, запросу правоохранительных органов и т.д.);",
         },
         {
            main: "4.5.4. Такая передача происходит в рамках продажи или иной передачи бизнеса (полностью или в части), при этом к приобретателю переходят все обязательства по соблюдению условий настоящей Политики применительно к полученной им персональной информации;",
         },
         {
            main: "4.5.5. В целях обеспечения возможности защиты прав и законных интересов Общества.",
         },
         {
            main: "4.6. При утрате или разглашении персональных данных Общество информирует пользователя об утрате или разглашении персональных данных.",
         },
      ],
   },
   {
      title: "5. Защита персональных данных пользователей",
      subtitles: [
         {
            main: "5.1. Общество гарантирует, что уровень защищенности персональных данных пользователей соответствует требованиям, установленным в Постановлении Правительства Российской Федерации от 1 ноября 2012 г. № 1119 «Об утверждении требований к защите персональных данных при их обработке в информационных системах персональных данных».",
         },
         {
            main: "5.2. Общество принимает необходимые организационные и технические меры для защиты персональных данных пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц в соответствии с требованиями Приказа ФСТЭК России от 18.02.2013 № 21 «Об утверждении Состава и содержания организационных и технических мер по обеспечению безопасности персональных данных при их обработке в информационных системах персональных данных».",
         },
         {
            main: "5.3. Сайт carrier-pro.ru имеет сертификат безопасности SSL, с помощью которого информация передается между пользователем и Оператором в закодированном виде, с целью предотвращения ее перехвата и искажения во время пересылки.",
         },
      ],
   },
   {
      title: "6. Ответственность",
      subtitles: [
         {
            main: "6.1. В случае неисполнения своих обязательств, Общество несёт ответственность за убытки, понесённые пользователем в связи с неправомерным использованием персональных данных, в соответствии с законодательством Российской Федерации, за исключением случаев, предусмотренных 6.2. настоящей Политики.",
         },
         {
            main: "6.2. В случае утраты или разглашения персональных данных пользователя Общество не несёт ответственность, если данная информация стала публичным достоянием до её утраты или разглашения, либо была разглашена самим пользователем или с согласия пользователя.",
         },
      ],
   },
   {
      title: "7. Заключительные положения",
      subtitles: [
         {
            main: "7.1. Общество вправе вносить изменения и дополнения в настоящую Политику. Новая редакция Политики действует с момента ее размещения на сайте carrier-pro.ru, если иное не предусмотрено в новой редакции Политики.",
         },
         {
            main: "7.2. К отношениям в области обработки и защиты персональных данных, не урегулированным в настоящей Политике, применяется действующее законодательство Российской Федерации.",
         },
         {
            main: "7.3. Все предложения или вопросы, связанные с обработкой и защитой персональных данных Обществом следует направлять по адресу электронной почты sales@welkingroup.ru",
         },
      ],
   },
];

function Privacy() {
   return (
      <section className={styles.privacy}>
         <div className="container">
            <Breadcrumbs />
            <h2 className={styles.privacy__title}>Политика конфиденциальности</h2>
            {textBlock.map((el, index) => {
               return <TextBlock key={index} content={el} />;
            })}
         </div>
      </section>
   );
}
export default Privacy;
