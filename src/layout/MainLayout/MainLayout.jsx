import { Outlet } from "react-router-dom";
import styles from "./main-layout.module.css"

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollTop from "../../custom-hooks/UseScrollTop";
import { Suspense } from "react";
import Loader from "../../components/common/Loader/Loader";

export default function MainLayout() {
  return (
    <div className={styles["app-layout"]}>
      <ScrollTop />
      <Header />
      <main className={styles["main-content"]}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
