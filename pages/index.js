import Hero from "../components/Header/hero.js";
import EventCard from "../components/Event card components/eventCard.js";
import NewsCard from "../components/Event card components/newsCard.js";
export default function Home() {
  return (
    <>
      {/* First element */}
      <Hero />

      {/* Event Card */}
      <div className="Global-latest-news-text">
        <h1>GET UPDATED ON OUR LATEST EVENTS!</h1>
      </div>

      <div className="event-card-global-container-event">
        <EventCard />
      </div>

      <div className="Global-latest-news-text">
        <h1>GET UPDATED ON OUR LATEST NEWS!</h1>
      </div>

      <div className="event-card-global-container-news">
        <NewsCard />
      </div>
    </>
  );
}
