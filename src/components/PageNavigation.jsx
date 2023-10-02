import { NavLink } from "react-router-dom";
import styles from "./PageNavigation.module.css";
import Logo from "../components/Logo";
const PageNavigation = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;

// navlink is use for checking the active classs/page
