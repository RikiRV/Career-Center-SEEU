import Styles from '../../styles/AboutCSS/about.module.css'


export default function WeDo() {
    return (
        <div className={Styles.WeDoContainer}>
            <div className={Styles.WeDoTitle}>
                <h1>What do we do?</h1>
            </div>
            <div className={Styles.WeDoList}>
                <ul>
                    <li>U ndihmojmë studentëve të identifikojnë, planifikojnë dhe realizojnë qëllimet e karrierës.</li>

                    <li>Kontribojmë në aftësimin e studentëve për kërkim të vendeve të punës dhe mundësive për
                        zhvillim profesional.</li>

                    <li>Ofrojmë informata aktuale për mundësitë për punësim dhe praktikë/Internship.</li>

                    <li>Ofrojmë informata aktuale për tregun e punës.</li>

                    <li>Organizojmë ngjarje që ju mundësojnë studentëve të krijojnë takime dhe kontakte me
                        punëdhënësit potenacial.</li>

                    <li>Nxisim dhe mbajmë partneritet të vazhdueshëm dhe afatgjatë me departamentet
                        akademike për të siguruar shkëmbime cilësore mes Qendrës së Karrierës, komunitetit
                        akademik dhe punëdhënësve brenda dhe jashtë kufijve të Maqedonisë.</li>
                </ul>
            </div>
        </div>
    )
}