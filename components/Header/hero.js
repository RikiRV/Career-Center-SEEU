import Styles from "../../styles/Header/hero.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import al from "../../public/locales/al/GlobalAL";
import en from "../../public/locales/en/GlobalEN.js";
import mk from "../../public/locales/mk/GlobalMK.js";

export default function Hero() {
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
      <div className={Styles.HeroContainer}>
        <video
          height={720}
          width={1280}
          className={Styles.SeeuVideo}
          autoPlay
          muted
          loop
          poster="News Photo.jpg"
        >
          <source src="SEEU Visual Campus.mp4" type="video/mp4"></source>
        </video>

        <div className={Styles.VideoTextWrapper}>
          <div className={Styles.VideoText}>
            <h1>{t.CCSTitle}</h1>
            <p>{t.CCSTtext}</p>
          </div>
          <div className={Styles.VideoText}>
            <h1>{t.WWDTitle}</h1>
            <p>{t.WWDText}</p>
          </div>
        </div>
      </div>

      {/* Student / Company buttons */}
      <div className={Styles.ButtonsNav}>
        <Link href="https://jobs.marseco.mk/career/seeu" passHref>
          <button>for Student</button>
        </Link>
        <Link href="#" passHref>
          <button>for Company</button>
        </Link>
      </div>
    </>
  );
}
