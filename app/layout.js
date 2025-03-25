"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import ReactQueryProvider from "@/lib/utils/queryProvider";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <ReactQueryProvider>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition={Bounce}
            />
            {children}
          </ReactQueryProvider>
        </Provider>
      </body>
    </html>
  );
}
