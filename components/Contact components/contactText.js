import Styles from "../../styles/Contact/contactText.module.css";
import al from "../../public/locales/al/ContactAL";
import en from "../../public/locales/en/ContactEN";
import mk from "../../public/locales/mk/ContactMK";
import { useRouter } from "next/router";

export default function ContactText() {
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
      <div className={Styles.TextContainer}>
        <h1>{t.Title}</h1>
        <p>{t.InformText}</p>
        <p>{t.AltText}</p>
      </div>
      <div className={Styles.ContactContainer}>
        <p>email: {t.Infromation.email}</p>
        <p>Phone: {t.Infromation.PhoneNumber}</p>
        <p>Location: {t.Infromation.Location}</p>
      </div>
    </>
  );
}
