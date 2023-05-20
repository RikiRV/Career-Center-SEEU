import Styles from '../../styles/Footer/footer.module.css'
import Link from 'next/link'
import { BiMap } from 'react-icons/bi'
import { AiOutlinePhone } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'

export default function Footer() {
    return (
        <>
        <footer className={Styles.footer}>
            <ul className={Styles.contact}>
                <li><BiMap size={20}/> Ilindenska nr:335 Tetovë</li>
            </ul>

            <ul className={Styles.contactNum}>
                <li><AiOutlinePhone size={20}/> 044-356-088</li>
                <li><AiOutlinePhone size={20}/> 044-356-189</li>
            </ul>

            <ul className={Styles.contactEmail}>
                <li><CgMail size={20}/> careercenter@seeu.edu.mk</li>
                <li><CgMail size={20}/> l.memedi-sinani@seeu.edu.mk</li>
                <li>Work hours: 8.00-16.00</li>
            </ul>

        </footer>
            <ul className={Styles.links}>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='about'>About</Link>
                </li>
                <li>
                    <Link href='contact'>Contact</Link>
                </li>
            </ul>
        </>
    )
}