import i18next from "i18next";

const translations = {
  en: {
    Register: {
      notemail: "Email doesnt exist",
      notpassword: "Wrong Password",
      notmatch: "Password doesn't match",
      values: "Please provide all values",
      exist: "Email is alredy exists",
    },
  },
  ar: {
    Register: {
      notemail: "البريد الإلكتروني غير موجود",
      notpassword: "كلمة المرور غير صحيحة",
      notmatch: "كلمة المرور غير متطابقة",
      values: "يرجى ادخال جميع القيم",
      exist: "البريد الالكتروني مسجل بالفعل",
    },
  },
};

i18next.init({
  resources: translations,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
export { translations };
