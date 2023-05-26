import Styles from "../../styles/Contact/form.module.css";
import al from "../../public/locales/al/ContactAL";
import en from "../../public/locales/en/ContactEN";
import mk from "../../public/locales/mk/ContactMK";
import { useRouter } from "next/router";

export default function Form() {
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
    <div className={Styles.formContainer}>
      <form action="https://formspree.io/f/xoqzzqan" method="POST">
        <label>{t.name}</label>
        <input type="text" name="name" required></input>
        <label>{t.email}</label>
        <input type="email" name="email" required></input>
        <label>{t.message}</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <img src="../ContactSVG.svg" width="450px"></img>
    </div>
  );
}
