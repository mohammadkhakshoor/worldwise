import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";
export default function PageNotFound() {
  return (
    <div>
      <h1 className={styles.hi}>Page not found 😢</h1>
      <Link to="/" className={styles.goToHomePage}>
        go to homepage
      </Link>
    </div>
  );
}
