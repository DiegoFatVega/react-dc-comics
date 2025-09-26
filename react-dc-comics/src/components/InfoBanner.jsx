import buy_comics_digital_comics from '../assets/img/buy-comics-digital-comics.png'
import buy_comics_merchandise from '../assets/img/buy-comics-merchandise.png'
import buy_comics_shop_locator from '../assets/img/buy-comics-shop-locator.png'
import buy_comics_subscriptions from '../assets/img/buy-comics-subscriptions.png'
import buy_dc_power_visa from '../assets/img/buy-dc-power-visa.svg'

export default function InfoBanner() {

    return (
        <section className="icons-group container d-flex">
            <div className='icon-item d-flex'>
                <img src={buy_comics_digital_comics} alt='' className='icon'></img>
                <span>DIGITAL COMICS</span>
            </div>
            <div className='icon-item d-flex'>
                <img src={buy_comics_merchandise} alt='' className='icon'></img>
                <span>DC MERCHANDISE</span>
            </div>
            <div className='icon-item d-flex'>
                <img src={buy_comics_subscriptions} alt='' className='icon'></img>
                <span>SUBSCRIPTION</span>
            </div>
            <div className='icon-item d-flex'>
                <img src={buy_comics_shop_locator} alt='' className='icon'></img>
                <span>COMIC SHOP LOCATOR</span>
            </div>
            <div className='icon-item d-flex'>
                <img src={buy_dc_power_visa} alt=''></img>
                <span>DC POWER VISA</span>
            </div>
        </section>
    )
}