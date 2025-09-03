import "./Pricing.css";
import Header from "./Header";
import Footer from "./Footer";
import Vector from "../img/Vector (1).svg";
import Group from "../img/Group.svg";

function Pricing(){
    return(
        <div id="pricing">
            <Header/>
            <div id="container">
                <h2>Choose a plan tailored to your needs</h2>
                <p>You are one-of-a kind, so shouldn’t you plan be too? With Creative. you can pick and choose the features you need to create a custom plan that fits you perfectly.</p>
                <div>
                    <button>Montly</button>
                    <button>Annually</button>
                </div>
            </div>

            <div id="wrapper">
                <div>
                    <span>Lite</span>
                    <p>Best for professionals</p>
                    <h4>$0/<p>month</p></h4>
                    <nav>
                        <li>Seamless onboarding</li>
                        <li>24/7 Customer onboarding</li>
                        <li>Can view  5 job description daily </li>
                        <li>Access to apply 1 job daily</li>
                    </nav>
                    <button>Get Started</button>
                </div>
                <div>
                    <span>Basic</span>
                    <p>More Features customizes for you</p>
                    <h4>$14.96/<p>month</p></h4>
                    <p>Everything in Lite ++</p>
                    <nav>
                        <li>ALL in LITE</li>
                        <li>Chat widget</li>
                        <li>Ai chat bot</li>
                    </nav>
                    <button>Get Started</button>
                </div>
                <div>
                    <span>Pro</span>
                    <p>Best Features customizes for expert</p>
                    <h4>$32.96/<p>month</p></h4>
                    <p>Everything in expert ++</p>
                    <nav>
                        <li>ALL IN BASIC and</li>
                        <li>Ai chat bot</li>
                        <li>Chat widget</li>
                    </nav>
                    <button>Get Started</button>
                </div>
            </div>
            <span>Feature Companion</span>

            <div className="wrapper">
                <div>
                    <aside className="aside">Home</aside>
                    <aside>About</aside>
                    <aside>Blog</aside>
                    <aside>Pricing</aside>
                </div>
                <div>
                    <nav className="aside">
                        <p>Price (monthly billing)</p>
                        <p>Price (annually billing)</p>
                        <p>24/7 Customer Support</p>
                        <p>Dashboard Access </p>
                        <p>Job Description daily views</p>
                        <p>Daily Job Application</p>
                        <p>Advanced Analysis</p>
                        <p>Chat widget</p>
                        <p>Dedicated Access</p>
                        <p>Resume review CV templates</p>
                        <p>Indicators for recruiters </p>
                    </nav>
                    <nav>
                        <p>$0 Monthly</p>
                        <p>$0 Yearly</p>
                        <p>9,230</p>
                        <p>Yes</p>
                        <p>No</p>
                        <p>5</p>
                        <p>No</p>
                        <p>No</p>
                        <p>No</p>
                        <p>Unavailable</p>
                        <p>Unavailable</p>
                    </nav>
                    <nav>
                        <p>$32 Monthly</p>
                        <p>$100 Yearly</p>
                        <p>9,230</p>
                        <p>Yes</p>
                        <p>Yes</p>
                        <p>5</p>
                        <p>No</p>
                        <p>No</p>
                        <p>No</p>
                        <p>Available</p>
                        <p>Unavailable</p>
                    </nav>
                    <nav>
                        <p>$500 Monthly</p>
                        <p>$1500 Yearly</p>
                        <p>9,230</p>
                        <p>Yes</p>
                        <p>Yes</p>
                        <p>10</p>
                        <p>Yes</p>
                        <p>Yes</p>
                        <p>Yes</p>
                        <p>Available</p>
                        <p>Available</p>
                    </nav>
                </div>
            </div>
            <h4>Frequently Asked Questions</h4>
            <div className="container">
                <nav>
                    <p>Do i need a credit card to sign up ?</p>
                    <i class="fa-solid fa-chevron-down"></i>
                </nav>
                <nav>
                    <p>How do you change me and how does billing work?</p>
                    <i class="fa-solid fa-chevron-down"></i>
                </nav>
                <nav>
                    <p>Can i cancel anything ?</p>
                    <i class="fa-solid fa-chevron-down"></i>
                </nav>
                <nav>
                    <p>Can i upgrade or downgrade my plan ?</p>
                    <i class="fa-solid fa-chevron-down"></i>
                </nav>
                <nav>
                    <p>What type of support do you offer ?</p>
                    <i class="fa-solid fa-chevron-down"></i>
                </nav>
                <nav>
                    <p>What are my payment options ?</p>
                    <i class="fa-solid fa-chevron-down"></i>
                </nav>
            </div>

            <h4>TESTIMONIALS</h4>
            <p>Here is what our Clients think of us</p>

            <div id="content">
                <div>
                    <img src={Vector} alt="" />
                    <p>Signed up on Creative in the summer summer 2020. did  quick check up for job search and i found my dream job. then i fuel up the energy to apply on the job then the rest s a story today. so glad.</p>
                    <nav>
                        <img src={Group} alt="" />
                        <div>
                            <p>Jessica Ubuntu</p>
                            <li>Snr Staff at Meta</li>
                        </div>
                    </nav>
                </div>
                <div>
                    <img src={Vector} alt="" />
                    <p>Joined Creative during winter break 2023. Their portfolio builder helped me land my first internship. Now I wake up excited to work on projects I'm passionate about every single morning.</p>
                    <nav>
                        <img src={Group} alt="" />
                        <div>
                            <p>Benfica Chelsea</p>
                            <li>Snr Staff at Grove</li>
                        </div>
                    </nav>
                </div>
                <div>
                    <img src={Vector} alt="" />
                    <p>Signed up on Creative in the summer summer 2020. did  quick check up for job search and i found my dream job. then i fuel up the energy to apply on the job then the rest s a story today. so glad.</p>
                    <nav>
                        <img src={Group} alt="" />
                        <div>
                            <p>Benfica Chelsea</p>
                            <li>Snr Staff at Grove</li>
                        </div>
                    </nav>
                </div>
                <div>
                    <img src={Vector} alt="" />
                    <p>Used Creative throughout 2022 for my career change journey. Their resource library guided me through every step perfectly. Now I finally have the work-life balance I've always wanted to achieve.</p>
                    <nav>
                        <img src={Group} alt="" />
                        <div>
                            <p>Benfica Chelsea</p>
                            <li>Snr Staff at Grove</li>
                        </div>
                    </nav>
                </div>
                <div>
                    <img src={Vector} alt="" />
                    <p>Joined Creative during winter break 2023. Their portfolio builder helped me land my first internship. Now I wake up excited to work on projects I'm passionate about every single morning.</p>
                    <nav>
                        <img src={Group} alt="" />
                        <div>
                            <p>Benfica Chelsea</p>
                            <li>Snr Staff at Grove</li>
                        </div>
                    </nav>
                </div>
                <div>
                    <img src={Vector} alt="" />
                    <p>Signed up on Creative in the summer summer 2020. did  quick check up for job search and i found my dream job. then i fuel up the energy to apply on the job then the rest s a story today. so glad.</p>
                    <nav>
                        <img src={Group} alt="" />
                        <div>
                            <p>Benfica Chelsea</p>
                            <li>Snr Staff at Grove</li>
                        </div>
                    </nav>
                </div>
            </div>
            <Footer/>
                
        </div>
    )
}
export default Pricing;