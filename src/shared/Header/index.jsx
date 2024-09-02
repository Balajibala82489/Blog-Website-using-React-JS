import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import styles from "./styles";

function Header() {
  useEffect(() => {
    console.clear();
  }, []);

  return (
    <div style={{ ...styles.wrapper }}>
      <Navbar />
    </div>
  );
}

export default Header;
