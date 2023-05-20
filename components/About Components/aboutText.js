import Styles from '../../styles/AboutCSS/about.module.css'


export default function AboutText() {
    return (
        <>
            <div className={Styles.Container}>
                <h1>
                    Career Center SEEU
                </h1>
                <div className={Styles.DescriptionContainer}>
                    <p>
                            Qendra e karrierës në UEJL është urë lidhëse në mes të studentëve të universitetit tonë dhe
                        kompanive, instiucioneve dhe oranizatave në vend. Qendra ofron shërbime për studentët
                        aktual dhe për studentët e diplomuar. Studentëve të diplomuar ju ofrojmë përkrahje për të
                        depërtuar më lehtë në tregun e punës, duke ju mundësuar të kenë informacion për vende të
                        lira pune dhe sesione indivuduale për këshillim dhe orientim në karrierë.
                    </p>
                    <p>
                            Studentëve aktual ju ndihmon të mësojnë më shumë për shkathësitë, aftësitë dhe vlerat e tyre,
                        të hulumtojnë karriera të ndryshme, të fitojnë përvojë pune, të ndërtojnë rrjetin e kontakteve,
                        të krijoni CV, të gjejnë vend për punë praktikë, të jenë të sigurtë gjatë pjesmarrjes nëpër
                        intervista.
                    </p>
                </div>
            </div>
        </>
    )
}