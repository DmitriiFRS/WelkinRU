import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import ReduxProvider from "./Redux/ReduxProvider";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export const metadata: Metadata = {
   title: "Welkin",
   description: "Welkin Россия",
};

const circle = localFont({
   src: [
      {
         path: "../public/fonts/circle/Circe-ExtraBold.ttf",
         weight: "800",
         style: "extraBold",
      },
      {
         path: "../public/fonts/circle/Circe-Bold.ttf",
         weight: "700",
         style: "bold",
      },
      {
         path: "../public/fonts/circle/Circe-Regular.ttf",
         weight: "400",
         style: "normal",
      },
      {
         path: "../public/fonts/circle/Circe-Light.ttf",
         weight: "300",
         style: "light",
      },
      {
         path: "../public/fonts/circle/Circe-ExtraLight.ttf",
         weight: "200",
         style: "extraLight",
      },
      {
         path: "../public/fonts/circle/Circe-Thin.ttf",
         weight: "100",
         style: "thin",
      },
   ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="ru">
         <body className={circle.className}>
            <div className="wrapper">
               <ReduxProvider>
                  <header className="header">
                     <Header />
                  </header>

                  <main className="main">{children}</main>

                  <footer className="footer">
                     <Footer />
                  </footer>
               </ReduxProvider>
            </div>
         </body>
      </html>
   );
}
