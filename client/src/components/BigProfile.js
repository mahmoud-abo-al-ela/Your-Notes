import Wrapper from "../assets/wrappers/BigProfile";
import { useAppContext } from "../context/appContext";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BigProfile = () => {
  const { logoutUser, user } = useAppContext();
  const { t } = useTranslation();
  return (
    <Wrapper>
      {user && (
        <>
          <h5>
            {t("navbar.dropdown.name")} {user.username}
          </h5>
          <NavLink to="profile">
            <button type="button" className="modify-btn">
              {t("navbar.dropdown.btn-1")}
            </button>
          </NavLink>
          <button type="button" className="logout-btn" onClick={logoutUser}>
            {t("navbar.dropdown.btn-2")}
          </button>
        </>
      )}
    </Wrapper>
  );
};
export default BigProfile;
