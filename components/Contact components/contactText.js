import Styles from "../../styles/Contact/contactText.module.css";
import Materials from "../../static API/ContactAPI/contactText.json";

export default function ContactText() {
  return (
    <>
      {Materials.map((material) => {
        return (
          <>
            <div className={Styles.TextContainer}>
              <h1>{material.Title}</h1>
              <p>{material.InformText}</p>
              <p>{material.AltText}</p>
            </div>
            <div className={Styles.ContactContainer}>
              <p>email: {material.Infromation.email}</p>
              <p>Phone: {material.Infromation.PhoneNumber}</p>
              <p>Location: {material.Infromation.Location}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
