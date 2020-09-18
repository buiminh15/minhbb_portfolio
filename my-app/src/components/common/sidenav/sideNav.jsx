import React from "react";
import { FaGithub, FaPaperPlane } from "react-icons/fa";
import BurgerMenu from "../burger-menu/burger-menu";

const SideNav = () => {
  return (
    <nav className="side-nav">
      <ul className="side-nav-navigation">
        <li className="side-nav-navigation__item">
          <BurgerMenu />
        </li>
        <li className="side-nav-navigation__item">
          <a
            href="https://github.com/buiminh15/"
            target="_blank"
            rel="noopener noreferrer"
            className="side-nav-navigation__link"
          >
            <FaGithub className="side-nav-navigation__icon" />
          </a>
        </li>
        <li className="side-nav-navigation__item">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="side-nav-navigation__link"
          >
            <FaPaperPlane className="side-nav-navigation__icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
