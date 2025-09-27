import FooterLinks from './FooterLinks'
import FooterIcons from './FooterIcons'

export default function AppFooter() {
    return (
        <footer>
            <section className="container d-flex footer-links">
                <div className="links-column">
                    <div className='first-column'>
                        <h4>DC COMICS</h4>
                        <ul>
                            <FooterLinks link={'Characters'}></FooterLinks>
                            <FooterLinks link={'Comics'}></FooterLinks>
                            <FooterLinks link={'Movies'}></FooterLinks>
                            <FooterLinks link={'TV'}></FooterLinks>
                            <FooterLinks link={'Games'}></FooterLinks>
                            <FooterLinks link={'Videos'}></FooterLinks>
                            <FooterLinks link={'News'}></FooterLinks>
                        </ul>
                    </div>
                    <div className="links-column">
                        <h4>SHOP</h4>
                        <ul>
                            <FooterLinks link={'Shop DC'}></FooterLinks>
                            <FooterLinks link={'Shop DC Collectibles'}></FooterLinks>
                        </ul>
                    </div>
                </div>
                <div className="links-column">
                    <h4>DC</h4>
                    <ul>
                        <FooterLinks link={'Terms Of Use'}></FooterLinks>
                        <FooterLinks link={'Privacy and policy (New)'}></FooterLinks>
                        <FooterLinks link={'Ad Choices'}></FooterLinks>
                        <FooterLinks link={'Advertising'}></FooterLinks>
                        <FooterLinks link={'Jobs'}></FooterLinks>
                        <FooterLinks link={'Subscriptions'}></FooterLinks>
                        <FooterLinks link={'Talent Workshops'}></FooterLinks>
                        <FooterLinks link={'CPSC Certificates'}></FooterLinks>
                        <FooterLinks link={'Ratings'}></FooterLinks>
                        <FooterLinks link={'Shop Help'}></FooterLinks>
                        <FooterLinks link={'Contact Us'}></FooterLinks>
                    </ul>
                </div>
                <div className="links-column">
                    <h4>SITES</h4>
                    <ul>
                        <FooterLinks link={'DC'}></FooterLinks>
                        <FooterLinks link={'MAD Magazine'}></FooterLinks>
                        <FooterLinks link={'DC Kids'}></FooterLinks>
                        <FooterLinks link={'DC Universe'}></FooterLinks>
                        <FooterLinks link={'DC Power Visa'}></FooterLinks>
                    </ul>
                </div>
            </section>
            <section className='container d-flex background '>
                <div className='social'>
                    <a href='#'><h1 className='sign-up-now'>SIGN-UP NOW!</h1></a>
                </div>
                <FooterIcons></FooterIcons>
            </section>
        </footer>
    )
}