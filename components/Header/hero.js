import Styles from '../../styles/Header/hero.module.css'
import Link from 'next/link'

export default function Hero() {

    return (
        <>
            <div className={Styles.HeroContainer}>

                <video height={720} width={1280} className={Styles.SeeuVideo} autoPlay muted loop poster='News Photo.jpg'>
                    <source src='SEEU Visual Campus.mp4' type='video/mp4'></source>
                </video>

                <div className={Styles.VideoTextWrapper}>

                    <div className={Styles.VideoText}>
                        <h1>Career Center Seeu</h1>
                        <p>The South East European University Career Centre is a linking bridge between students of our university and companies in North Macedonia.</p>
                    </div>
                    <div className={Styles.VideoText}>
                        <h1>What do we do?</h1>
                        <p> We are working with two groups of people, the present and graduated students. To the last ones we help building their career steps by finding places for employment in private or public sectors dependence from their major or qualities.</p>
                    </div>

                </div>

            </div>

            {/* Student / Company buttons */}
            <div className={Styles.ButtonsNav}>
                <Link href='#' passHref><button>for Student</button></Link>
                <Link href='#' passHref><button>for Company</button></Link>
            </div>
        </>
    )
}