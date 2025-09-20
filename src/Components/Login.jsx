import "./Login.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../img/LOGO (1).svg";
import Google from "../img/GoogleLogo.svg";
import Facebook from "../img/uiw_facebook.svg";

function Login(){
    function Logining(){
        const username = document.getElementById("loginUsername").value; 
        const password = document.getElementById("loginPassword").value; 
        
        let users = JSON.parse(localStorage.getItem("users")) || []; 
        
        const validUser = users.find( 
            user => user.username === username && user.password === password 
        ); 
        
        if (validUser) { 
            alert("login succussful");
            document.querySelector("#Dashboard").click();
        } else {
            alert("Invalid login details.");
        } 
    }
    return(
        <div id="login">
            <section>
                <img src={Logo} alt="logo" />
                <p>Doesn't have an account? <span onClick={() => {
                    document.querySelector("#Signup").click();
                }}>Sign up</span></p>
                <button onClick={() => {
                    document.querySelector("#Signup").click();
                }}>Sign up</button>
            </section>
            <motion.article
                initial={{ y: -250 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 25, type: "spring", stiffness: 300 }}
            >
                <legend>Log in</legend>
                <form onSubmit={(e) => e.preventDefault()}>
                    <nav>
                        <button> <img src={Facebook} alt="" /> Continue with Facebook</button>
                        <button> <img src={Google} alt="" /> Continue with Goggle </button>
                    </nav>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your Email Address" id="loginUsername"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter your Password" id="loginPassword" />
                    </div>
                    <nav>
                        <p><input type="checkbox" id="check" /> Remember me</p>
                        <li>Forgotten password ?</li>
                    </nav>
                    <div>
                        <button onClick={Logining}>Log in</button>
                    </div>
                </form>
            </motion.article>
            <Link to="/Account" id="Signup"/>
            <Link to="/Dashboard" id="Dashboard"/>
        </div>
    )
}
export default Login;