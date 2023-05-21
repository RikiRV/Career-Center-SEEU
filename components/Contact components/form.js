import Styles from "../../styles/Contact/form.module.css";

export default function Form() {
  return (
    <div className={Styles.formContainer}>
      <form action="" method="POST">
        <label>Full Name:</label>
        <input type="text" name="name" required></input>
        <label>Your email:</label>
        <input type="email" name="email" required></input>
        <label>Your message:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <img src="ContactSVG.svg" width="450px"></img>
    </div>
  );
}
