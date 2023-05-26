import Styles from "../../styles/AboutCSS/about.module.css";
import al from "../../public/locales/al/AboutTextAL";
import en from "../../public/locales/en/AboutTextEN";
import mk from "../../public/locales/mk/AboutTextMK";
import { useRouter } from "next/router";

export default function MissionText() {
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
      <div className={Styles.ContainerMission}>
        <h1>{t.missionTitle}</h1>
        <p>{t.missionText}</p>
      </div>
    </>
  );
}
