import Styles from "../../styles/Event Card/eventCard.module.css";
import Materials from "../../static API/event.json";

export default function EventCard() {
  return (
    <>
      {Materials.map((material) => {
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
