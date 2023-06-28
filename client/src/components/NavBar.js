import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import logo from "../assets/images/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "../i18n.js";
import { BigProfile, SmallProfile } from "./index.js";
import DarkMode from "./DarkMode";
import { useAppContext } from "../context/appContext";

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { t } = useTranslation();
  const { user } = useAppContext();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const changeLanguage = (lng) => {
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
    document.body.setAttribute("dir", lng === "ar" ? "rtl" : "ltr");
    fetch("/api/v1/language", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language: lng }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Language preference updated on the server");
        } else {
          console.error("Error updating language preference on the server");
        }
      })
      .catch((error) => {
        console.error(
          "Error occurred while sending language update request:",
          error
        );
      });
  };

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;

    if (currentLanguage === "en") {
      changeLanguage("ar");
    } else {
      changeLanguage("en");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      changeLanguage(storedLanguage);
    }
  }, []);

  const handleDropdownClick = () => {
    setDropdown(!dropdown);
    const notesElement = document.getElementById("notes");
    if (isSmallScreen) {
      notesElement.style.zIndex = dropdown ? "0" : "-1";
    }
  };

  return (
    <Wrapper>
      <nav className="nav-center">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="btn-container">
          <button
            type="button"
            className="lang-button"
            onClick={toggleLanguage}
          >
            {t("navbar.language")}
          </button>
          <DarkMode />
          {user && (
            <button
              type="button"
              className="user-button"
              onClick={handleDropdownClick}
            >
              <FaUserCircle />
            </button>
          )}
          <div
            className={dropdown ? "dropdown show-dropdown" : "dropdown"}
            onClick={handleDropdownClick}
          >
            <BigProfile />
            <SmallProfile />
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default NavBar;
