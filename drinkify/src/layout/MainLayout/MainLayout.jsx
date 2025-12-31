import { Outlet } from "react-router-dom";
import styles from "./main-layout.module.css"

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollTop from "../../custom-hooks/UseScrollTop";
import Bubbles from "../../components/common/Bubbles/Bubbles";
import { Suspense } from "react";
import Loader from "../../components/common/Loader/Loader";

export default function MainLayout() {
  return (
    <div className={styles["app-layout"]}>
      <ScrollTop />
      <Header />
      <Bubbles />
      <main className={styles["main-content"]}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
