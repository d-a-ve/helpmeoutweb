import { Outlet } from "react-router-dom";

import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

const PageLayout = () => {
  return (
    <main className="bg-white">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default PageLayout;
