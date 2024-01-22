import ImgWars from "../../../public/StarWarsImage.jpg"
import Styles from "./Card.module.css"

export default function Card(props){
    return(
        <>
        <div className={Styles.container_Card}>
            <div className={Styles.poster}>
                <img src={ImgWars} alt="poster do Star Wars" />
            </div>
            <div className={Styles.description}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <button>Comprar Agora</button>
            </div>
        </div>
        </>
    )
}