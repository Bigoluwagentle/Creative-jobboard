import "./Signup.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../img/LOGO.svg";
import Approve from "../img/mdi_approve.svg";
import Google from "../img/GoogleLogo.svg";
import Facebook from "../img/uiw_facebook.svg";
import Profile from "../img/wpf_name.svg";
import Call from "../img/solar_phone-bold-duotone.svg";
import Password from "../img/mdi_password.svg";
import Email from "../img/ic_baseline-email.svg";

function Signup(){
    return(
        <div id="signup">
            <section className="account">
                <img src={Logo} alt="Logo" />
                <article>
                    <nav>
                        <img src={Approve} alt="Approve" />
                        <div>
                            <h4>Access to visible job openings </h4>
                            <p>With our network you can access fresh, vetted jobopening from different sectors and industries.</p>
                        </div>
                    </nav>
                    <nav>
                        <img src={Approve} alt="Approve" />
                        <div>
                            <h4>Flexible hiring collaborations</h4>
                            <p>Our software is designed for companies to be moreefficient and collaborative in the hiring process.</p>
                        </div>
                    </nav>
                    <nav>
                        <img src={Approve} alt="Approve" />
                        <div>
                            <h4>Dynamic application tracking</h4>
                            <p>With Creative, you can identify and analyze your job application patterns over time, This will help you determine what works and what doesn’t</p>
                        </div>
                        
                    </nav>
                    <nav>
                        <img src={Approve} alt="Approve" />
                        <div>
                            <h4>Affordable pricing specifics</h4>
                            <p>We understand that businesses need to make a living and we offer competitive pricing: sustainable in both price and quality.</p>
                        </div>
                    </nav>
                </article>
            </section>
            <motion.section
                initial={{ y: -150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 25, type: "spring", stiffness: 300 }}
            >
                <p>Already have an account ? <span onClick={() => {
                    document.querySelector("#login").click();
                }}>Sign in</span></p>
                <h2>Personal Information</h2>
                <p>This helps properly profile you as a user of our platform as well as to prevent theft. Your privacy and security is important to us ans we will never share your information to the third party or leakage world.</p>
                <nav>
                    <button> <img src={Facebook} alt="" /> Continue with Facebook</button>
                    <button> <img src={Google} alt="" /> Continue with Goggle </button>
                </nav>
                <form>
                    <div className="div">
                        <nav>
                            <label htmlFor="First Name">First Name</label>
                            <summary>
                                <img src={Profile} alt="" />
                                <input type="text" placeholder="Enter your First Name" />
                            </summary>
                        </nav>
                        <nav>
                            <label htmlFor="Last Name">Last Name</label>
                            <summary>
                                <img src={Profile} alt="" />
                                <input type="text" placeholder="Enter your Last Name" />
                            </summary>
                        </nav>
                    </div>
                    <div>
                        <label htmlFor="Phone Number">Phone Number</label>
                        <summary>
                            <img src={Call} alt="" />
                            <input type="text" placeholder="Enter your Phone Number" />
                        </summary>
                    </div>
                    <div>
                        <label htmlFor="Email address">Email address</label>
                        <summary>
                            <img src={Email} alt="" />
                            <input type="text" placeholder="Enter your Email Address" />
                        </summary>
                    </div>
                
                    <div>
                        <label htmlFor="Password">Password</label>
                        <summary>
                            <img src={Password} alt="" />
                            <input type="text" placeholder="Create a secure password" />
                        </summary>
                    </div>
                    <div id="div">
                        <button>Back</button>
                        <button onClick={() => {
                            document.querySelector("#login").click();
                        }}>Sign up</button>
                    </div>
                </form>
            </motion.section>
            <Link to="/Login" id="login"/>
        </div>
    )
}
export default Signup;