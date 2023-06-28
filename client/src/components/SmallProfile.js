import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/SmallProfile";
import { useAppContext } from "../context/appContext";
import { useTranslation } from "react-i18next";
const SmallProfile = () => {
  const { modifyUser, logoutUser, user } = useAppContext();
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
export default SmallProfile;
