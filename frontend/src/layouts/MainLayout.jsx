import { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import PropTypes from "prop-types";
import Search from "../components/Modals/Search/Search";
import Dialog from "../components/Modals/Dialog/Dialog";

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(false);

  useEffect(() => {
    const storedDialog = localStorage.getItem("dialog");

    if (storedDialog === null) {
      // İlk defa giriyorsa göster ve bir daha gösterilsin diye false kaydet
      localStorage.setItem("dialog", JSON.stringify(false));
      setTimeout(() => {
        setIsDialogShow(true);
      }, 2000);
    } else {
      const dialogStatus = JSON.parse(storedDialog);
      if (!dialogStatus) {
        // checkbox işaretlenmemişse göster
        setTimeout(() => {
          setIsDialogShow(true);
        }, 2000);
      }
    }
  }, []);

  return (
    <div className="main-layout">
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
