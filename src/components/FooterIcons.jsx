import footer_facebook from '../assets/img/footer-facebook.png'
import footer_twitter from '../assets/img/footer-twitter.png'
import footer_youtube from '../assets/img/footer-youtube.png'
import footer_pinterest from '../assets/img/footer-pinterest.png'
import footer_periscope from '../assets/img/footer-periscope.png'

export default function FooterIcons() {

    return (
        <div className='d-flex social-icons'>
            <a href='#'> <h1 className='follow-us'>FOLLOW US</h1></a>
            <a href='#'><img src={footer_facebook} alt=""></img></a>
            <a href='#'><img src={footer_twitter} alt=""></img></a>
            <a href='#'><img src={footer_youtube} alt=""></img></a>
            <a href='#'><img src={footer_pinterest} alt=""></img></a>
            <a href='#'><img src={footer_periscope} alt=""></img></a>
        </div>
    )
}