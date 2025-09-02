import "./Footer.css";
import Logo from "../img/LOGO (1).svg";
import Twiiter from "../img/prime_twitter.svg";
import Gmail from "../img/skill-icons_gmail-light.svg";
import Whatsapp from "../img/mingcute_whatsapp-fill.svg";
import Framer79 from "../img/Frame 79.svg";
function Footer(){
    return(
        <footer>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <p>Our Roadmap</p>
                <li>What is Creative?</li>
                <li>Why Creative?</li>
                <li>Who’s using Creative?</li>
            </div>
            <div>
                <p>Company</p>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Testimonial</li>
            </div>
            <div>
                <p>Resources</p>
                <li>Documentation</li>
                <li>Integration</li>
                <li>Partners </li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Our Community</li>
            </div>
            <div>
                <p>Contact us</p>
                <li>info@creative.com</li>
                <li>+2348143861167</li>
                <nav>
                    <img src={Twiiter} alt="Twitter icon" />
                    <img src={Gmail} alt="gmail icon" />
                    <img src={Whatsapp} alt="whatspp" />
                    <img src={Framer79} alt="linkedin" />
                </nav>
            </div>
        </footer>
    )
}
export default Footer;