import "./Footer.css";
import italy from "../../imgs/flags/italy.png";
import uk from "../../imgs/flags/uk.png";
import spain from "../../imgs/flags/spain.png";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import Facebook from "../../imgs/socials/facebook.svg";
import Flickr from "../../imgs/socials/flickr.svg";
import Instagram from "../../imgs/socials/instagram.svg";
import Pinterest from "../../imgs/socials/pinterest.svg";
import Twitter from "../../imgs/socials/twitter.svg";
import Whatsapp from "../../imgs/socials/whatsapp.svg";
import Youtube from "../../imgs/socials/youtube.svg";

function Footer() {
    return (
        <footer>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", alignItems: "center" }}>
                <table style={{ display: "flex", flexDirection: "column", flex: "1", padding: "0 1%", height: "fit-content" }}>
                    <thead>
                        <tr>
                            <td>Come visit us!</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>07AM</td>
                            <td>&#8212;</td>
                            <td>10PM</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>07AM</td>
                            <td>&#8212;</td>
                            <td>10PM</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>07AM</td>
                            <td>&#8212;</td>
                            <td>10PM</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>07AM</td>
                            <td>&#8212;</td>
                            <td>10PM</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>07AM</td>
                            <td>&#8212;</td>
                            <td>10PM</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>07AM</td>
                            <td>&#8212;</td>
                            <td>10PM</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>07AM</td>
                            <td>&#8212;</td>
                            <td>10PM</td>
                        </tr>
                    </tbody>
                </table>


                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.4791671045967!2d14.764307629251835!3d40.675805015815286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bc22513d7101f%3A0x81fd8556b78a6074!2sPiazza%20Dante%20Alighieri%2C%2084121%20Salerno%20SA!5e0!3m2!1sen!2sit!4v1671730014640!5m2!1sen!2sit"
                    width="400"
                    height="350"
                    style={{ border: "0" }}
                    allowFullScreen="no"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location">
                </iframe>


                <div style={{ display: "flex", flex: "1", flexDirection: "column", padding: "0 1%" }}>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "1rem"}}>
                    <div>
                        <a href="https://goo.gl/maps/Uiawf2SnTALAr8CFA">
                            <FaMapMarkerAlt fill="rgb(165, 97, 42)" />
                            <span>Piazza Dante Alighieri, 84121, Salerno, Campania, Italia</span>
                        </a>
                    </div>
                    <div>
                        <a href="tel:+390891234567890">
                            <FaPhoneAlt fill="rgb(165, 97, 42)" />
                            <span>+39 089 1234567890</span>
                        </a>
                    </div>
                    <div>
                        <a href="mailto:johnsmith@gmail.com">
                            <FaEnvelope fill="rgb(165, 97, 42)" />
                            <span>johnsmith@gmail.com</span>
                        </a>
                    </div>
                    <h3 style={{ textAlign: "center" }}>Contact us</h3>
                        <div style={{ display: "flex", justifyContent: "center", gap: "0.33rem" }}>
                            <a href="">
                                <img src= { Instagram } alt="Instagram link, Icon by Hüseyin Çakır (CC BY 3.0)" style={{ height: "3.33rem" }} />
                            </a>
                            <a href="">
                                <img src= { Facebook } alt="Facebook link, Icon by Hüseyin Çakır (CC BY 3.0)" style={{ height: "3.33rem" }}/>
                            </a>
                            <a href="">
                                <img src= { Twitter } alt="Twitter link, Icon by Hüseyin Çakır (CC BY 3.0)" style={{ height: "3.33rem" }}/>
                            </a>
                            <a href="">
                                <img src= { Youtube } alt="Youtube link, Icon by Hüseyin Çakır (CC BY 3.0)" style={{ height: "3.33rem" }}/>
                            </a>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "0", paddingTop: "0", gap: "0.33rem", marginTop: "-0.5rem" }}>
                            <a href="">
                                <img src= { Pinterest } alt="Pinterest link, Icon by Hüseyin Çakır (CC BY 3.0)" style={{ height: "3.33rem" }}/>
                            </a>
                            <a href="">
                                <img src= { Flickr } alt="Flickr link, Icon by Hüseyin Çakır (CC BY 3.0)" style={{ height: "3.33rem" }}/>
                            </a>
                            <a href="">
                                <img src= { Whatsapp } alt="WhatsApp link, Icon by Hüseyin Çakır (CC BY 3.0)" style={{ height: "3.33rem" }}/>
                            </a>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a href="">Privacy Policy</a>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
                        <img src={italy} alt="Italian Language" className="flagBall notSelected"/>
                        <img src={uk} alt="English Language" className="flagBall"/>
                        <img src={spain} alt="Spanish Language" className="flagBall notSelected"/>
                    </div>
                </div>
            </div>

            <p>&#169; Test Pasticceria</p>
        </footer>
    )
}

export default Footer
