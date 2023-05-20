import Styles from '../../styles/Event Card/newsCard.module.css'
import Materials from '../../static API/news.json'

export default function NewsCard() {
    return (
        <>
        {Materials.map(material => {
            return(
                <div className={Styles.NewsCardContainer} key={material.id}>

                    {/* Front Card */}
                    <div className={Styles.FrontContainer}>

                        <h2>{material.NewsTitle}</h2>
                        <p>{material.NewsContent}</p>

                    </div>
                    <img src={material.ImgLink} width='250px'></img>
                </div>
            )
        })}
        </>
    )
}