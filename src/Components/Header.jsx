import Logo from "../img/LOGO (1).svg";
import { Link } from "react-router-dom";
import "./Header.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Menu from "../img/bx_menu.svg";
import Close from "../img/icon-close.svg";
import Logo1 from "../img/LOGO.svg";
function Header(){
    useEffect(() => {
            document.querySelectorAll("header > div li").forEach(item => {
                item.onclick = function(e){
                    e.preventDefault();
                    document.querySelectorAll("header > div li").forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                };
            })
        }, [])
    return(
        <div id="mobiles">
            <header>
                <img src={Logo} alt="logo" />
                <div>
                    <li onClick={() => {
                        document.querySelector("#home").click();
                    }}>Home</li>
                    <li onClick={() => {
                        document.querySelector("#abouter").click();
                    }}>About us</li>
                    <li onClick={() => {
                        document.querySelector("#price").click();
                    }}>Pricing</li>
                    <li onClick={() => {
                        document.querySelector("#blogers").click();
                    }}>Blog</li>
                </div>
                <img src={Menu} alt="menu" id="menu" style={{width: "30px"}} onClick={() => {
                    document.querySelector("#mobile").style.display = "block";
                }} />
                <motion.div id="pro"
                    transition={{ duration: 2, type: "spring", stiffness: 300 }}
                    whileHover={{
                        scale: 1.2
                    }}
                    onClick= {() => {
                       document.querySelector("#myprofile").click();
                    }}
                >
                <i class="fa-solid fa-user"></i>
                <h4>Hi <i class="fa-solid fa-chevron-down"></i></h4>
                </motion.div>
                
            </header>

            <motion.div id="mobile"
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 20, type: "spring", stiffness: 400 }}
            >
                <div className="mobile">
                    <nav>
                        <img src={Logo1} alt="" />
                        <img src={Close} alt="close" style={{width: "20px"}} onClick={() => {
                            document.querySelector("#mobile").style.display = "none";
                        }} />
                    </nav>
                    <div>
                        <li onClick={() => {
                            document.querySelector("#home").click();
                        }}>Home</li>
                        <li onClick={() => {
                            document.querySelector("#about").click();
                        }}>About us</li>
                        <li onClick={() => {
                            document.querySelector("#price").click();
                        }}>Pricing</li>
                        <li onClick={() => {
                            document.querySelector("#blogers").click();
                        }}>Blog</li>
                    </div>

                    <button onClick={() => {
                        document.querySelector("#log").click();
                    }}>Login</button>

                    <button onClick={() => { 
                        document.querySelector("#Signup").click();
                    }}>Sign up</button>
                    <Link to="/Signup" id="Signup"/>
                    <Link to="/Login" id="log"/>
                    <Link to="/Aboutus" id="abouter"/>
                    <Link to="/Dashboard" id="home"/>
                    <Link to="/Pricing" id="price"/>
                    <Link to="/Blog" id="blogers"/>
                    <Link to="/Profile" id="myprofile"/>
                    
                </div>
            </motion.div>
        </div>
    )
}
export default Header;