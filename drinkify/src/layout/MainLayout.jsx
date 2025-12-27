import { Outlet } from "react-router-dom";
import styles from "../styles/main-layout.module.css"

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../utils/ScrollTop";
import PersistentBubbles from "../components/PersistentBubbles";
import { Suspense } from "react";
import Loader from "../components/Loader";

export default function MainLayout() {
  return (
    <div className={styles["app-layout"]}>
      <ScrollTop />
      <Header />
      <PersistentBubbles />
      <main className={styles["main-content"]}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
