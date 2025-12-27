import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../utils/ScrollTop";
import PersistentBubbles from "../components/PersistentBubbles";

export default function MainLayout() {
  return (
    <>
      <ScrollTop />
      <Header />
      <PersistentBubbles />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
