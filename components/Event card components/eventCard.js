import Styles from "../../styles/Event Card/eventCard.module.css";
import { useRouter } from "next/router";
import al from "../../public/locales/al/EventAL";
import en from "../../public/locales/en/EventEN";
import mk from "../../public/locales/mk/EventMK";

export default function EventCard() {
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
      {t.map((material) => {
        return (
          <div className={Styles.EventCardContainer} key={material.id}>
            {/* Front Card */}
            <div className={Styles.FrontContainer}>
              <h2>{material.title}</h2>
              <p>{material.text}</p>

              {/*Modal trigger */}
              <button id="EventModalBtn" className={Styles.ModalButton}>
                Read More
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
