import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../img/LOGO (1).svg";
import Google from "../img/GoogleLogo.svg";
import Facebook from "../img/uiw_facebook.svg";

function Login(){
    return(
        <div id="login">
            <section>
                <img src={Logo} alt="logo" />
                <p>Doesn't have an account? <span onClick={() => {
                    document.querySelector("#Signup").click();
                }}>Sign up</span></p>
                <button>Sign up</button>
            </section>
            <article>
                <legend>Log in</legend>
                <form method="get">
                    <nav>
                        <button> <img src={Facebook} alt="" /> Continue with Facebook</button>
                        <button> <img src={Google} alt="" /> Continue with Goggle </button>
                    </nav>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your Email Address" id="email"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter your Password" name="password" id="password" />
                    </div>
                    <nav>
                        <p> <input type="checkbox" id="check" /> Remember me</p>
                        <li>Forgotten password ?</li>
                    </nav>
                    <div>
                        <button>Log in</button>
                    </div>
                </form>
            </article>
            <Link to="/Signup" id="Signup"/>
        </div>
    )
}
export default Login;