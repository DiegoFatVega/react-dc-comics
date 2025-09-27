import FooterLinks from './FooterLinks'
import FooterIcons from './FooterIcons'
import FirstFooterColumn from '../data/FirstFooterColumn'
import SecondFooterColumn from '../data/SecondFooterColumn'

export default function AppFooter() {
    return (
        <footer>
            <section className="container d-flex footer-links">
                <div className='links-column' >
                    {
                        FirstFooterColumn.map(item => (

                            <div className='first-column'>
                                <h4 key={item.id}>{item.title}</h4>
                                <ul>{
                                    item.list.map(list => (
                                        <li key={list.id}>
                                            <a href={list.link}>{list.text}</a>
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>
                        ))
                    }
                </div>
                {
                    SecondFooterColumn.map(item => (
                        <div className='links-column' key={item.id}>
                            <h4> {item.title}</h4>
                            <ul>{
                                item.list.map(list => (
                                    <li key={list.id}>
                                        <a href={list.link}>{list.text}</a>
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                    ))
                }
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