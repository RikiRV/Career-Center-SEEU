import Styles from "../../styles/Event Card/newsCard.module.css";
import { useRouter } from "next/router";
import al from "../../public/locales/al/NewsAL";
import en from "../../public/locales/en/NewsEN";
import mk from "../../public/locales/mk/NewsMK";

export default function NewsCard() {
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
          <div className={Styles.NewsCardContainer} key={material.id}>
            {/* Front Card */}
            <div className={Styles.FrontContainer}>
              <h2>{material.NewsTitle}</h2>
              <p>{material.NewsContent}</p>
            </div>
            <img src={material.ImgLink} width="400px"></img>
          </div>
        );
      })}
    </>
  );
}
