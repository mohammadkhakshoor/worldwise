import Footer from "./Footer";
import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>list of cities</p>

      <Footer />
    </div>
  );
};

export default Sidebar;
