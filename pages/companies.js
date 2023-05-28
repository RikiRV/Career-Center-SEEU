import Styles from "../styles/Companies/companies.module.css";
import Form from "../components/Contact components/form";
import ContactText from "../components/Contact components/contactText";
import al from "../public/locales/al/CompanyAL";
import en from "../public/locales/en/CompanyEN";
import mk from "../public/locales/mk/CompanyMK";
import { useRouter } from "next/router";

export default function Companies() {
  const router = useRouter();
  const { locale } = router;

  var t;

  if (locale === "en") {
    t = en;
  } else if (locale === "al") {
    t = al;
  } else if (locale === "mk") {
    t = mk;
  }
  return (
    <>
      <div className={Styles.CompaniesContainer}>
        <div className={Styles.QuestionText}>
          <h1>{t.Question1}</h1>
          <p>{t.P1}</p>
        </div>
        <div className={Styles.WhatCanWeDo}>
          <h1>{t.Question2}</h1>
          <p>{t.P2}</p>
        </div>
        <div className={Styles.HowCanYouHelp}>
          <h1>{t.Question3}</h1>
          <p>{t.P3}</p>
        </div>
      </div>
      <ContactText />
      <Form />
    </>
  );
}
