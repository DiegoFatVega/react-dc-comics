import footer_facebook from '../assets/img/footer-facebook.png'
import footer_twitter from '../assets/img/footer-twitter.png'
import footer_youtube from '../assets/img/footer-youtube.png'
import footer_pinterest from '../assets/img/footer-pinterest.png'
import footer_periscope from '../assets/img/footer-periscope.png'

import dc_logo_bg from '../assets/img/dc-logo-bg.png'
export default function AppFooter() {
    return (
        <footer>
            <section className="container d-flex footer-links">
                <div className="links-column">
                    <div className='first-column'>
                        <h4>DC COMICS</h4>
                        <ul>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </div>

                    <div className="links-column">
                        <h4>SHOP</h4>
                        <ul>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>

                </div>

                <div className="links-column">
                    <h4>DC</h4>
                    <ul>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy policy (New)</a></li>
                        <li><a href="#">Ad Choices</a></li>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Talent Workshops</a></li>
                        <li><a href="#">CPSC Certificates</a></li>
                        <li><a href="#">Ratings</a></li>
                        <li><a href="#">Shop Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="links-column">
                    <h4>SITES</h4>
                    <ul>
                        <li><a href="#">DC</a></li>
                        <li><a href="#">MAD Magazine</a></li>
                        <li><a href="#">DC Kids</a></li>
                        <li><a href="#">DC Universe</a></li>
                        <li><a href="#">DC Power Visa</a></li>
                    </ul>
                </div>
            </section>
            <section className='container d-flex background '>
                <div className='social'>
                    <h1 className='sign-up-now'>SIGN-UP NOW!</h1>
                </div>
                <div className='d-flex social-icons'>
                    <h1 className='follow-us'>FOLLOW US</h1>
                    <img src={footer_facebook} alt=""></img>
                    <img src={footer_twitter} alt=""></img>
                    <img src={footer_youtube} alt=""></img>
                    <img src={footer_pinterest} alt=""></img>
                    <img src={footer_periscope} alt=""></img>
                </div>
            </section>
        </footer>
    )
}