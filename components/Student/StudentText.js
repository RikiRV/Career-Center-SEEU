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
    <>
      <div className={Styles.StudentContainer}>
        <div className={Styles.QA1}>
          <p>{t.TopT}</p>
        </div>
      </div>
      {/* 2nd paragraph */}
      <div className={Styles.StudentContainer}>
        <div className={Styles.QA1}>
          <h1>{t.Q1}</h1>
          <ul>
            {t.P1.map((material) => {
              return (
                <li>
                  <p>{material}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* 3rd paragraph */}
      <div className={Styles.StudentContainer}>
        <div className={Styles.QA2}>
          <h1>{t.Q2}</h1>
          <p>{t.P2}</p>
          <ul>
            {t.P2L.map((material) => {
              return (
                <li>
                  <p>{material}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* 4th paragraph */}
      <div className={Styles.StudentContainer}>
        <div className={Styles.QA2}>
          <h1>{t.Q3}</h1>
          <ul>
            {t.P3L.map((material) => {
              return (
                <li>
                  <p>{material}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* 5th paragraph */}
      <div className={Styles.StudentContainer}>
        <div className={Styles.QA2}>
          <h1>{t.Q4}</h1>
          <ul>
            {t.P4L.map((material) => {
              return (
                <li>
                  <p>{material}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* 6th paragraph */}
      <div className={Styles.StudentContainerNoBorder}>
        <div className={Styles.QA2}>
          <h1>{t.Q5}</h1>
          <ul>
            {t.P5L.map((material) => {
              return (
                <li>
                  <p>{material}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
