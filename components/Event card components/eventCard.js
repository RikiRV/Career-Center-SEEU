import Styles from "../../styles/Event Card/eventCard.module.css";
import { useRouter } from "next/router";
import al from "../../public/locales/al/EventAL";
import en from "../../public/locales/en/EventEN";
import mk from "../../public/locales/mk/EventMK";
import { useState } from "react";

export default function EventCard() {
  const router = useRouter();
  const { locale } = router;
  const [isChecked, setIsChecked] = useState(false);
  var ReadText = isChecked === false ? "Read More" : "Read Less";

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
      {t.map((material) => {
        return (
          <div className={Styles.EventCardContainer} key={material.id}>
            {/* Front Card */}
            <div className={Styles.FrontContainer}>
              <h2>{material.title}</h2>
              <p>{material.text}</p>

              {/*Modal trigger */}
              <input
                type="checkbox"
                className={Styles.ExpandButton}
                checked={isChecked}
              ></input>
              <button
                id="EventModalBtn"
                className={Styles.ModalButton}
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
              >
                {ReadText}
              </button>
            </div>

            {/* Back Card */}
            <div className={Styles.BackContainer}>
              <p>
                {material.date.day}/{material.date.month}/{material.date.year}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
