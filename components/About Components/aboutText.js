import Styles from "../../styles/AboutCSS/about.module.css";
import al from "../../public/locales/al/AboutTextAL";
import en from "../../public/locales/en/AboutTextEN";
import mk from "../../public/locales/mk/AboutTextMK";
import { useRouter } from "next/router";

export default function AboutText() {
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
      <div className={Styles.Container}>
        <h1>Career Center SEEU</h1>
        <div className={Styles.DescriptionContainer}>
          <p>{t.p1}</p>
          <p>{t.p2}</p>
        </div>
      </div>
    </>
  );
}
