import "./Account.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../img/LOGO.svg";
import Approve from "../img/mdi_approve.svg";
import Bulb from "../img/ion_bulb.svg";
import Hiring from "../img/material-symbols-light_tab-search.svg";
function Account(){
    useEffect(() => {
        document.querySelectorAll("section > aside").forEach(item => {
            item.onclick = function(events){
                events.preventDefault();
                document.querySelectorAll("section > aside").forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            };
        })
    }, [])
    
    return(
        <div id="account">
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
            <section>
                <p>Already have an account ? <span onClick={() => {
                    document.querySelector("#login").click();
                }}>Sign in</span></p>
                <li>Select Account Type</li>
                <p>Are you a creative actively searching for a job, you are looking to fill a position(s) at your Organization?</p>
                <aside>
                    <img src={Bulb} alt="" />
                    <div>
                        <h4>Creative</h4>
                        <p>Looking for full time or freelance gigs</p>
                    </div>
                </aside>
                <aside>
                    <img src={Hiring} alt="" />
                    <div>
                        <h4>Hiring Manager </h4>
                        <p>Looking to recruit for position(s)</p>
                    </div>
                </aside>
                <button onClick={() => {
                    document.querySelector("#sign").click();
                }}>Next</button>
            </section>
            <Link to="/Signup" id="sign"/>
            <Link to="/Login" id="login"/>
        </div>
    )
}
export default Account;