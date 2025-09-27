import dcLogo from '../assets/img/dc-logo.png'
import HeaderLinks from './HeaderLinks'
import headerMenu from '../data/headerMenu'

export default function AppHeader() {
    return (
        <header>
            <div className="container d-flex nav-bar">
                <img src={dcLogo} alt="DC-logo" />
                <div className='d-flex options'>
                    {
                        headerMenu.map(menu => (

                            <HeaderLinks link={menu.link} text={menu.text} key={menu.id}></HeaderLinks>

                        ))
                    }
                </div>
            </div>
        </header>
    )
}