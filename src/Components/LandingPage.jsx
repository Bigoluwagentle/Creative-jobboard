import "./LandingPage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../img/LOGO (1).svg";
import HeaderImage from "../img/Frame 8.svg";
import Arrow from "../img/Vector.svg";
import Group from "../img/Group 1.svg";
import Star from "../img/solar_star-bold-duotone.svg";
import Frame33 from "../img/Frame 33.svg";
import Frame73 from "../img/Frame 73.svg";
import Twiiter from "../img/prime_twitter.svg";
import Gmail from "../img/skill-icons_gmail-light.svg";
import Whatsapp from "../img/mingcute_whatsapp-fill.svg";
import Framer79 from "../img/Frame 79.svg";
import Menu from "../img/bx_menu.svg";

function LandingPage(){
    return(
        <div id="landing">
            <div id="header">
                <header>
                    <img src={Logo} alt="logo" />
                    <div>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 20, type: "spring", stiffness: 400 }}
                        whileHover={{
                        scale: 1.2
                        }}
                    >
                        <button>Log in</button>
                        <button>Sign up</button>
                    </motion.div>
                    <img src={Menu} alt="menu" id="menu" style={{width: "30px"}} />
                </header>
                <section>
                    <aside>
                        <h1>Join the <span>Global Phenomenon</span> in the recruitment space</h1>
                        <p>If you believe in the strength and power of creative thinking in recruiting and if you are a team player and lover of thrive a fast paced environment then get ready to play a crucial part in our creation of the future.</p>
                        <motion.button 
                            initial={{ x: -150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 5, type: "spring", stiffness: 300 }}
                            whileHover={{
                            scale: 1.2
                            }}
                            onClick={() => { document.querySelector("#Signup").click();}}
                        >Get Started</motion.button>
                    </aside>
                    <motion.img src={HeaderImage} alt="headerimage"
                        initial={{ y: -200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 5, type: "spring", stiffness: 300 }}
                    />
                </section>

                <article>
                    <h4>Search for a role</h4>
                    <div>
                        <motion.nav
                            initial={{ x: 150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 5, type: "spring", stiffness: 300 }}
                        >
                            <input type="text" value="Job Title" />
                            <img src={Arrow} alt="" />
                        </motion.nav>
                        <motion.nav
                            initial={{ y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 5, type: "spring", stiffness: 300 }}
                        >
                            <input type="text" value="Location" />
                            <img src={Arrow} alt="" />
                        </motion.nav>
                        <motion.nav
                            initial={{ x: -150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 5, type: "spring", stiffness: 300 }}
                        >
                            <input type="text" value="Profesional Level" />
                            <img src={Arrow} alt="" />
                        </motion.nav>
                    </div>
                </article>
            </div>
            <summary>
                <nav>
                    <img src={Star} alt="start" />
                    <h4>Explore amazing categories</h4>
                    <p>We have the largest database of job & career opportunity information in the world and our job listings are updated regularly to keep you up-to-date on as an early bird.</p>
                    <motion.button
                        initial={{ x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 5, type: "spring", stiffness: 300 }}
                        whileHover={{
                        scale: 1.2
                        }}
                    >See All Categories</motion.button>
                </nav>
                <img src={Group} alt="group" />
            </summary>
            <div id="wrapper">
                <nav>
                    <li>Job recruiting</li>
                    <h4>Experience a seamless hiring process</h4>
                    <p>Our organization is dedicated to providing the most positive hiring experience in the world , we take a system thinking approach to candidate and employer matchmaking, we are constantly working to increase efficiency and build a new product features in order to provide the best  possible experience  </p>
                    <div>
                        <nav>
                            <h4>Enterprise Job Board</h4>
                            <p>Access to a global work that is a deliberately available for whom worth ot or knowledgeable in the field. We schedule and scale.</p>
                        </nav>
                        <nav>
                            <h4>Team Collaboration</h4>
                            <p>With no limit on your location. We globalize your work and keep it seamless scope with what we can do.</p>
                        </nav>
                    </div>
                </nav>
                <motion.img src={Frame33} alt=""
                    initial={{ x: 250 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 25, type: "spring", stiffness: 300 }}
                />
            </div>
            {/* <div id="test">
                <p>TESTIMONALS</p>
                <h4>What our users says about us </h4>
            </div> */}

            <div className="container">
                <div>
                    <motion.h4
                        initial={{ x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 25, type: "spring", stiffness: 300 }}
                    >Find your dream job</motion.h4>
                    <p>100,000 active job waiting for you </p>
                </div>
                <section>
                    <div>
                        <nav>
                            <li>Copywriter</li>
                            <p>5h ago</p>
                        </nav>
                        <h4>London, UK</h4>
                        <p>You are a professional who writes clear, consistency for ads and marketing material They work closely alongside web general...</p>
                        <motion.button
                            initial={{ x: 250 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 25, type: "spring", stiffness: 300 }}
                        >Apply Now</motion.button>
                    </div>
                    <div>
                        <nav>
                            <li>Web Developer</li>
                            <p>1h ago</p>
                        </nav>
                        <h4>United States</h4>
                        <p>You are a professional who writes clear, consistency for ads and marketing material They work closely alongside web general...</p>
                        <motion.button
                            initial={{ x: 250 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 25, type: "spring", stiffness: 300 }}
                        >Apply Now</motion.button>
                    </div>
                    <div>
                        <nav>
                            <li>Frontend Developer</li>
                            <p>1h ago</p>
                        </nav>
                        <h4>United States</h4>
                        <p>You are a professional who writes clear, consistency for ads and marketing material They work closely alongside web general...</p>
                        <motion.button
                            initial={{ x: 250 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 25, type: "spring", stiffness: 300 }}
                        >Apply Now</motion.button>
                    </div>
                    <div>
                        <nav>
                            <li>UX Designer</li>
                            <p>2h ago</p>
                        </nav>
                        <h4>London, UK</h4>
                        <p>You are a professional who writes clear, consistency for ads and marketing material They work closely alongside web general...</p>
                        <motion.button
                            initial={{ x: 250 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 25, type: "spring", stiffness: 300 }}
                        >Apply Now</motion.button>
                    </div>
                    <div>
                        <nav>
                            <li>Product Manager</li>
                            <p>1h ago</p>
                        </nav>
                        <h4>United States</h4>
                        <p>You are a professional who writes clear, consistency for ads and marketing material They work closely alongside web general...</p>
                        <motion.button
                            initial={{ x: 250 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 25, type: "spring", stiffness: 300 }}
                        >Apply Now</motion.button>
                    </div>
                    <div>
                        <nav>
                            <li>Web Developer</li>
                            <p>2h ago</p>
                        </nav>
                        <h4>United States</h4>
                        <p>You are a professional who writes clear, consistency for ads and marketing material They work closely alongside web general...</p>
                        <motion.button
                            initial={{ x: 250 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 25, type: "spring", stiffness: 300 }}
                        >Apply Now</motion.button>
                    </div>
                </section>
            </div>

            <div id="content">
                <nav>
                    <h4>Subscribe to our newsletter</h4>
                    <p>Subscribe to our newsletter for regular company updates and be the first to know about new job openings, promoted blog articles and discounts on pricing plans. </p>
                    <motion.div
                        initial={{ x: -250 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 25, type: "spring", stiffness: 300 }}
                    >
                        <input type="email" placeholder="Enter Your Email Address" />
                        <button>Subscribe</button>
                    </motion.div>
                </nav>
                <img src={Frame73} alt="framer" />
            </div>

            <footer>
                <div>
                    <img src={Logo} alt="" />
                    {/* <p>Join a network of over 30,000 people making a living and scaling their businesses on our platform.</p> */}
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
            <Link to="/Signup" id="Signup"/>
        </div>
    )
}
export default LandingPage;