import "./Profile.css";
import Header from "./Header";
import Logo1 from "../img/LOGO.svg";
import Framer700 from "../img/Frame 698.svg";
import Framer701 from "../img/Frame 697 (1).png";
import Framer702 from "../img/Frame 699.svg";
import Framer703 from "../img/Frame 723.png";

function Profile(){
    return(
        <div id="profile">
            <Header/>
            <section>
                <div id="aside">
                    <section>
                        <img src={Logo1} alt="" />
                        <nav>
                            <h4>Overview</h4>
                            <h4>Application</h4>
                            <h4>Messages</h4>
                            <h4>My Profile</h4>
                            <h4>Notification</h4>
                            <h4>Setting</h4>
                            <h4>Logout</h4>
                        </nav>
                    </section>
                </div>
                <div id="main">
                    <div id="overview">
                        <img src={Framer700} alt="" />
                        <img src={Framer701} alt="" />
                        <img src={Framer702} alt="" />
                    </div>
                    <div className="overview">
                        <img src={Framer703} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Profile;