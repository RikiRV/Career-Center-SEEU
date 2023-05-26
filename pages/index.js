import Hero from "../components/Header/hero.js";
import EventCard from "../components/Event card components/eventCard.js";
import NewsCard from "../components/Event card components/newsCard.js";
import { useRouter } from "next/router.js";
import al from "../public/locales/al/GlobalAL.js";
import en from "../public/locales/en/GlobalEN.js";
import mk from "../public/locales/mk/GlobalMK.js";

export default function Home() {
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
      {/* First element */}
      <Hero />

      {/* Event Card */}
      <div className="Global-latest-news-text">
        <h1>{t.LatestEvents}</h1>
      </div>

      <div className="event-card-global-container-event">
        <EventCard />
      </div>

      <div className="Global-latest-news-text">
        <h1>{t.LatestNews}</h1>
      </div>

      <div className="event-card-global-container-news">
        <NewsCard />
      </div>
    </>
  );
}
