import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.NavBar}>
      <label className={styles.logo}>Logo</label>
      <input type="checkbox" className={styles.check} />
      <label>
        <FontAwesomeIcon icon={faLayerGroup} className={styles.menu} />
      </label>

      <ul className={styles.list}>
        <li>
          <Link to="/" className={styles.active}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
