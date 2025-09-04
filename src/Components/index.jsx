import "./Blog.css";
import Header from "./Header";
import Footer from "./Footer";
import Frame614 from "../img/Frame 614.svg";
import Img1 from "../img/Frame 614 (1).svg";
import Img2 from "../img/Frame 614 (2).svg";
import Img3 from "../img/Frame 614 (3).svg";
import Img4 from "../img/Frame 614 (4).svg";
import Img5 from "../img/Frame 614 (5).svg";
import Img6 from "../img/Frame 614 (6).svg";
import Group from "../img/Group.svg";

function Aboutus(){
    return(
        <div id="blog">
            <Header/>
            <section>
                <h2>All our Taught in One Place</h2>
                <p>Take a tip down the minds of our creators writers by going through these resources perfectly and give feedbacks to those articles you are reading.</p>
                <div>
                    <span>All</span>
                    <span>Tech</span>
                    <span>Features</span>
                    <span>Interview</span>
                    <span>Products</span>
                </div>
                <nav>
                    <input type="search" placeholder="search" />
                    <button>Browse</button>
                </nav>
            </section>

            <div id="container">
                <span>TRENDING ARTICLES</span>
                <img src={Frame614} alt="" />
                <span>ALL ARTICLES</span>
                <div>
                    <nav>
                        <img src={Img1} alt="" />
                        <div>
                            <li>PRODUCTS</li>
                            <h4>Unleashing the full potential of activating pro plan</h4>
                            <p>Pricing strategies account for many business factors, like inventories levels, marketing objectives, target audiences, brand positioning, and product profitability. They're also influenced by..</p>
                            <nav>
                                <img src={Group} alt="" />
                                <div>
                                    <li>Nana Festus</li>
                                    <p>Snr Staff at IG</p>
                                </div>
                            </nav>
                        </div>
                    </nav>
                    <nav>
                        <img src={Img2} alt="" />
                        <div>
                            <li>PRODUCTS</li>
                            <h4>Improving your resume and portfolio to obtain maximal rewards</h4>
                            <p>In the 7 years I worked at Google, I conducted 100 interviews and including batch improvement and so the last 7 years, I was also a hiring manager, I've reviewed many portfolios and res...</p>
                            <nav>
                                <img src={Group} alt="" />
                                <div>
                                    <li>Nana Festus</li>
                                    <p>Snr Staff at IG</p>
                                </div>
                            </nav>
                        </div>
                    </nav>
                    <nav>
                        <img src={Img3} alt="" />
                        <div>
                            <li>PRODUCTS</li>
                            <h4>Aisha Minna Interview: My journey into tech</h4>
                            <p>Before I begin this lengthy, insure story, let me start by saying that if you, the reader, are in a situation that makes obtaining a career in tech seem like a silly goal, I did that ship you..."</p>
                            <nav>
                                <img src={Group} alt="" />
                                <div>
                                    <li>Nana Festus</li>
                                    <p>Snr Staff at IG</p>
                                </div>
                                
                            </nav>
                        </div>
                    </nav>
                    <nav>
                        <img src={Img4} alt="" />
                        <div>
                            <li>PRODUCTS</li>
                            <h4>Unleashing the full potential of activating pro plan</h4>
                            <p>Pricing strategies account for many business factors, like inventories levels, marketing objectives, target audiences, brand positioning, and product profitability. They're also influenced by..</p>
                            <nav>
                                <img src={Group} alt="" />
                                <div>
                                    <li>Nana Festus</li>
                                    <p>Snr Staff at IG</p>
                                </div>
                            </nav>
                        </div>
                    </nav>
                    <nav>
                        <img src={Img5} alt="" />
                        <div>
                            <li>PRODUCTS</li>
                            <h4>Unleashing the full potential of activating pro plan</h4>
                            <p>Pricing strategies account for many business factors, like inventories levels, marketing objectives, target audiences, brand positioning, and product profitability. They're also influenced by..</p>
                            <nav>
                                <img src={Group} alt="" />
                                <div>
                                    <li>Nana Festus</li>
                                    <p>Snr Staff at IG</p>
                                </div>
                            </nav>
                        </div>
                    </nav>
                    <nav>
                        <img src={Img6} alt="" />
                        <div>
                            <li>PRODUCTS</li>
                            <h4>Unleashing the full potential of activating pro plan</h4>
                            <p>Pricing strategies account for many business factors, like inventories levels, marketing objectives, target audiences, brand positioning, and product profitability. They're also influenced by..</p>
                            <nav>
                                <img src={Group} alt="" />
                                <div>
                                    <li>Nana Festus</li>
                                    <p>Snr Staff at IG</p>
                                </div>
                            </nav>
                        </div>
                    </nav>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Aboutus;