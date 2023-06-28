import { useState } from "react";
import Wrapper from "../../assets/wrappers/Dashboard";
import { useAppContext } from "../../context/appContext";
import { Alert, FormRow } from "../../components";
import { useTranslation } from "react-i18next";
const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const setFormattedBirthdate = (isoDate) => {
    if (isoDate) {
      const formattedDate = isoDate.slice(0, 10);
      return formattedDate;
    }
    return "";
  };

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState(user.phone);
  const [birthdate, setBirthdate] = useState(
    setFormattedBirthdate(user.birthdate)
  );
  const { t } = useTranslation();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !birthdate || !phone) {
      displayAlert(t("modify.failed"));
      return;
    }
    updateUser({ username, email, password, birthdate, phone });
  };
  return (
    <Wrapper>
      <div className="top">
        <h3>{t("modify.title")}</h3>
        {showAlert && <Alert />}
      </div>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-center">
          <FormRow
            type="email"
            name="email"
            value={email}
            inputHandler={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="password"
            name="password"
            value={password}
            inputHandler={(e) => setPassword(e.target.value)}
          />
          <FormRow
            type="text"
            name="username"
            value={username}
            inputHandler={(e) => setUsername(e.target.value)}
          />
          <FormRow
            type="phone"
            name="phone"
            value={phone}
            inputHandler={(e) => setPhone(e.target.value)}
          />
          <FormRow
            type="date"
            name="birthdate"
            value={birthdate}
            inputHandler={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? t("modify.btn-1") : t("modify.btn-2")}
        </button>
      </form>
    </Wrapper>
  );
};
export default Profile;
