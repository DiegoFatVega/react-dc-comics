import style from './ComicCard.module.css'

export default function ComicCard({ title, img }) {

    return (
        <div className={style.card}>
            <img src={img} alt="" className={style.comic_img} />
            <h3 className={style.title}>{title}</h3>
        </div>
    )

}