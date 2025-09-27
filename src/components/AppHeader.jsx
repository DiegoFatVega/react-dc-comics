import dcLogo from '../assets/img/dc-logo.png'
import HeaderLinks from './HeaderLinks'

export default function AppHeader() {
    return (
        <header>
            <div className="d-flex nav-bar">
                <img src={dcLogo} alt="DC-logo" />
                <HeaderLinks link={'CHARACTERS'}></HeaderLinks>
                <HeaderLinks link={'COMICS'}></HeaderLinks>
                <HeaderLinks link={'MOVIES'}></HeaderLinks>
                <HeaderLinks link={'TV'}></HeaderLinks>
                <HeaderLinks link={'GAMES'}></HeaderLinks>
                <HeaderLinks link={'COLLECTIBLES'}></HeaderLinks>
                <HeaderLinks link={'VIDEOS'}></HeaderLinks>
                <HeaderLinks link={'FANS'}></HeaderLinks>
                <HeaderLinks link={'NEWS'}></HeaderLinks>
                <HeaderLinks link={'SHOP'}></HeaderLinks>
            </div>
        </header>
    )
}