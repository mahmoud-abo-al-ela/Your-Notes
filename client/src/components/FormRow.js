import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FormRow = ({ type, name, inputHandler, labelText, value }) => {
  const isPasswordInput = name === "password" || name === "confirmPassword";
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {t(`Register.${labelText || name}`)}
      </label>
      <div className="password-input-container">
        <input
          type={isPasswordInput && showPassword ? "text" : type}
          className="form-input"
          name={name}
          value={value}
          onChange={inputHandler}
        />
        {isPasswordInput && (
          <button
            type="button"
            className="password-toggle-button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormRow;
