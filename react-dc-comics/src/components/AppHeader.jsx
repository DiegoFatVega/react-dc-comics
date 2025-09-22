import dcLogo from '../assets/img/dc-logo.png'
export default function AppHeader() {
    return (
        <header>
            <div className="">
                <div className="row">
                    <img src={dcLogo} alt="" className="col-1" />
                    <nav className="col text-end mt-5">
                        <a><b>CHARACTERS</b></a>
                        <a><b>COMICS</b></a>
                        <a><b>MOVIES</b></a>
                        <a><b>TV</b></a>
                        <a><b>GAMES</b></a>
                        <a><b>COLLECTIBLES</b></a>
                        <a><b>VIDEOS</b></a>
                        <a><b>FANS</b></a>
                        <a><b>NEWS</b></a>
                        <a><b>SHOP</b></a>
                    </nav>
                </div>
            </div>
        </header>
    )
}