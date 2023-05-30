import Styles from "../../styles/Student/student.module.css";
import al from "../../public/locales/al/StudentAL";
import en from "../../public/locales/en/StudentEN";
import mk from "../../public/locales/mk/StudentMK";
import { useRouter } from "next/router";

export default function StudentText() {
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
    <div className={Styles.StudentContainer}>
      <div className={Styles.QA1}>
        <h1>{t.Q1}</h1>
        <p>{t.P1}</p>
      </div>
      <div className={Styles.QA2}>
        <h1>{t.Q1}</h1>
        <p>{t.P1}</p>
      </div>
    </div>
  );
}
