import Wrapper from "../assets/wrappers/DarkMode";
import { MdNightlightRound } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.setAttribute("data-theme", theme ? "dark" : "light");
  }, [theme]);

  return (
    <Wrapper>
      <button type="button" className="theme-button" onClick={toggleTheme}>
        {theme ? <BsSunFill /> : <MdNightlightRound />}
      </button>
    </Wrapper>
  );
};

export default DarkMode;
