import React from "react";

import { Link } from "react-scroll";
import styles from "./Header.module.scss";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className={styles.header}>
      <img src="./img/logo.png" alt="Logo" />
      {menuOpen === false && mobile === true ? (
        <div
          className={styles.bars}
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src="./img/bars.png"
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className={styles.headerMenu}>
          <li>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
