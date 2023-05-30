import { useRouter } from "next/router";
import Styles from "../../styles/Header/header.module.css";
import Link from "next/link";

export default function PgHeader() {
  const { locale, locales, push } = useRouter();

  return (
    <>
      {/* Top of Hero section */}
      <div className={Styles.TopOfHero}>
        {/* Language changes */}
        <div className={Styles.Language}>
          <ul>
            <li>
              <Link href={"/"} locale={"al"} passHref>
                <img src="../Albania.svg" width="30px"></img>
              </Link>
            </li>
            <li>
              <Link href={"/"} locale={"en"} passHref>
                <img src="../UnitedKingdom.svg" width="30px"></img>
              </Link>
            </li>
            <li>
              <Link href={"/"} locale={"mk"} passHref>
                <img src="../Macedonia.svg" width="40px"></img>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav>
        {/* Logo */}
        <Link href="/" passHref>
          <img
            src="../Career center - logo svg.svg"
            width="50px"
            className={Styles.Logo}
          ></img>
        </Link>

        {/* Links */}
        <ul className={Styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
          <li>
            <Link href="student">Student</Link>
          </li>
          <li>
            <Link href="companies">Company</Link>
          </li>
        </ul>

        {/* Student / Company buttons */}
        <div className={Styles.ButtonsNav}>
          <Link href="https://jobs.marseco.mk/career/seeu" passHref>
            <button>Job Corner</button>
          </Link>
        </div>
      </nav>
    </>
  );
}
