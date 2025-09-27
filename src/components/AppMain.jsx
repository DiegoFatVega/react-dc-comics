
import InfoBanner from "./InfoBanner"
import ComicCard from "./ComicCard"
import comics from "../data/comics"

export default function AppMain() {
    return (
        <main>
            <section className='container jumbotron'>
                <h1 className='current-series'>CURRENT SERIES</h1>
            </section>
            <section className='container content'>
                <div className="row d-flex">
                    {
                        comics.map(comic => (
                            <div className="col" key={comic.id}>
                                <ComicCard title={comic.title} img={comic.thumb}></ComicCard>
                            </div>
                        ))
                    }
                </div>
                <div className='button d-flex'>
                    <button><b>LOAD MORE</b></button>
                </div>
            </section>
            <InfoBanner> </InfoBanner>
        </main>
    )
}