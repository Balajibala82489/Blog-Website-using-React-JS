import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import MyScrollToTop from "../shared/MyScrollToTop";

const PrivateRoot = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <MyScrollToTop />
    </div>
  );
};

export default PrivateRoot;
