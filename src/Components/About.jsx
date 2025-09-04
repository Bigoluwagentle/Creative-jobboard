// import "./About.css";
import "./Style.css";
import { motion } from "framer-motion";
import Frame32 from "../img/Frame 32.svg";
import Frame36 from "../img/Frame 36.svg";
import Frame361 from "../img/Frame 36 (1).svg";
import Frame500 from "../img/Frame 500.svg";
import Frame5001 from "../img/Frame 500 (1).svg";
import Image34 from "../img/image 34.svg";
import Footer from "./Footer";
import Header from "./Header";

function About(){
    return(
        <div id="about">
            <Header/>
            <section>
                <h2>We’re a team of creators and innovators changing the whole game into a faster squirrel</h2>
                <p>If you believe in the strength and power of creative thinking in recruiting and if you are a team player and lover of thrive a fast paced environment then get ready to play a crucial part in our creation of the future.</p>
                <motion.button
                    initial={{ x: -120, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                    exit={{x:400}}
                    whileHover={{
                    scale: 1.2
                    }}
                >See Case Study</motion.button>
                <motion.img src={Frame32} alt="" 
                    initial={{ scale: 0 }}
                    whileInView={{ duration: 3, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300, ease: "easeInOut" }}
                />
            </section>

            <article>
                <motion.div
                    initial={{ x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                >
                    <li>Our Story</li>
                    <h4>A gap in the recruitment Space</h4>
                    <p>Since the inception of Creative, our primary aim has always been to revolutionize the hiring process of businesses looking to scale their businesses with top talent. We provide seamless and transparent hiring services to our clients. Our easy to use user-friendly interface makes the process fast and easy</p>
                    <p>Our strong sense of engaging with clients means that we are constantly finding new ways to make the entire process more seamless.</p>
                </motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                >
                    <nav>
                        <li>FOUNDED</li>
                        <span>2021</span>
                        <li>TEAM</li>
                        <span>2021</span>
                    </nav>
                    <nav>
                        <li>AVERAGE RATING</li>
                        <span>2021</span>
                        <li>ACTIVE USERS</li>
                        <span>2021</span>
                    </nav>
                    <nav>
                        <li>STRATEGY EFFICIENY</li>
                        <span>2021</span>
                        <li>JOB POSTED</li>
                        <span>2021</span>
                    </nav>
                </motion.div>
            </article>

            <div id="wrapper">
                <motion.div
                    initial={{ x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                >
                    <h4>Vision Statement</h4>
                    <p>We think that big companies are trendsetters for the economy. They engage the biggest suppliers. They articulate their needs effectively as they look to hire top talent and frameworks. They open huge markets to their suppliers. For employability. The long-term vision and investment capacities of large companies make it possible to develop sustainable and equitable expertise.</p>
                    <p>We believe that the majority of workers will be non-salaried. It is not just a quest for freedom, but an aspiration to decide which topics to engage with time, skills and income.</p>
                </motion.div>
                <motion.img src={Frame36} alt="frame" 
                    initial={{ scale: 0.3, opacity:0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                />
            </div>
            <div id="wrapper">
                <motion.img src={Frame361} alt="frame" 
                    initial={{ scale: 0.3, opacity:0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                />
                <motion.div
                    initial={{ x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                >
                    <h4>Mission Statement</h4>
                    <p>We structure and secure the relationships between companies and selected creative candidates. We intend to change how the world works together. We started with the simple idea that people should be able to buy and sell freely online. Since then, we've evolved into a global as we advance on our on-ground or global retail commerce platform.</p>
                </motion.div>
               
            </div>

            <div className="container">
                <span>Meet Our Team</span>
                <motion.h4>Meet Our Team</motion.h4>
                <div>
                    <nav>
                        <motion.img src={Frame500} alt="" 
                            initial={{ opacity:0, y: 100 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                        />
                        <p>CodeWithFaith</p>
                        <li>CEO </li>
                    </nav>
                    <nav>
                        <motion.img src={Frame5001} alt="" 
                            initial={{ opacity:0, y: 100 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                        />
                        <p>Abdulmalik</p>
                        <li>CEO</li>
                    </nav>
                    <nav>
                        <motion.img src={Frame500} alt="" 
                            initial={{ opacity:0, y: 100 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                        />
                        <p>CodeWithFaith</p>
                        <li>CEO</li>
                    </nav>
                    <nav>
                        <motion.img src={Frame5001} alt="" 
                            initial={{ opacity:0, y: 100 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                        />
                        <p>Abdulmalik</p>
                        <li>CEO</li>
                    </nav>
                    <nav>
                        <motion.img src={Frame500} alt="" 
                            initial={{ opacity:0, y: 100 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                        />
                        <p>CodeWithFaith</p>
                        <li>CEO & Cofounder</li>
                    </nav>
                    <nav>
                        <motion.img src={Frame5001} alt="" 
                            initial={{ opacity:0, y: 100 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                        />
                        <p>Abdulmalik</p>
                        <li>CEO</li>
                    </nav>
                </div>
            </div>

            <div id="container">
                <motion.h4
                    initial={{ x: -120, opacity:0}}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                   
                >Our Office</motion.h4>
                <p>Although we're a remote-first company, we value physical relationships with our clients and partners, and foster creative collaboration within the team by rotating team members through this space too. Hence, we have an office at:</p>
                <li>No. 23, 15th Street, Lekki Phase 1, Lagos, Nigeria</li>
                <motion.button
                    initial={{ x: -400, opacity:0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: "5s", delay: 0.5, type: "spring", stiffness: 300, ease: "easeIn" }}
                    exit={{x:400}}
                    whileHover={{
                    scale: 1.2
                    }}
                >Get Direction</motion.button>
                <motion.img src={Image34} alt="" 
                    initial={{ scale: -0 }}
                    whileInView={{ opacity: 1, scale: 1}}
                    transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                    
                />
            </div>
            
            <div className="content">
                <span>CONTACT US</span>
                <h4>Get In touch with us for more information </h4>
                <p>Simple drop a messages using this form below and we ill get back to you soon </p>
                <nav>
                    <motion.input type="text" placeholder="Your Name" 
                        initial={{ opacity:0, y: 100 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                    />
                    <motion.input type="email" placeholder="Your Email" 
                        initial={{ opacity:0, y: 100 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                    />
                    <motion.input type="text" placeholder="Where are you Contacting Us" 
                        initial={{ opacity:0, y: 100 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                    />
                    <motion.textarea placeholder="Your Messages"
                        initial={{ opacity:0, y: 100 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                    ></motion.textarea>
                    <motion.button
                        initial={{ opacity:0, x: -100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{ duration: "5s", type: "spring", stiffness: 300, ease: "easeIn" }}
                    >Send</motion.button>
                </nav>
            </div>

            <Footer/>
        </div>
    )
}
export default About;