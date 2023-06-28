import i18next from "i18next";

const updateLanguage = (req, res) => {
  const { language } = req.body;
  i18next.changeLanguage(language, (err) => {
    if (err) {
      console.log("Error changing language:", err);
      return res.status(500).json({ error: "Failed to change language" });
    }

    const translatedValues = i18next.t("Register");
    console.log(translatedValues);
    res.json(translatedValues);
  });
};

export { updateLanguage };
