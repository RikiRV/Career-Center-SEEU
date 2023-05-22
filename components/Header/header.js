import Styles from "../../styles/Header/header.module.css";
import Link from "next/link";

export default function PgHeader() {
  return (
    <>
      {/* Top of Hero section */}
      <div className={Styles.TopOfHero}>
        {/* Language changes */}
        <div className={Styles.Language}>
          <ul>
            <li>EN</li>
            <li>AL</li>
            <li>MK</li>
          </ul>
        </div>
        {/* Work hours */}
        <div className={Styles.Work}>
          <p>careercenter@seeu.edu.com</p>
          <p>Work Hours: 8:00-16:00</p>
        </div>
      </div>

      <nav>
        {/* Logo */}
        <Link href="/" passHref>
          <img
            src="Career center - logo svg.svg"
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
        </ul>

        {/* Student / Company buttons */}
        <div className={Styles.ButtonsNav}>
          <Link href="https://jobs.marseco.mk/career/seeu" passHref>
            <button>for Student</button>
          </Link>
          <Link href="#" passHref>
            <button>for Company</button>
          </Link>
        </div>
      </nav>
    </>
  );
}
