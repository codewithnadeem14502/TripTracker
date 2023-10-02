import styles from "./Logo.module.css";
import logoimg from "../assests/logo.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/">
      <img src={logoimg} alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
