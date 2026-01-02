import React from "react"
import insta from "../assets/lj/social1.png";
import linkedin from "../assets/lj/social2.png";
import whatsapp from "../assets/lj/social3.png";
import phone from "../assets/lj/social4.png";

export default function Contact(){
    return(
    <main id="last">
        <div>
            <p>Reach <b>ME</b></p>
        </div>
        <div id="social">
            <div id="photo">
                <div>
                    <img src={insta} alt=""/>
                    <p>Instagram</p>
                </div>
                <div>
                    <img src={linkedin}alt=""/>
                    <p>Linkedin</p>
                </div>
                <div>
                    <img src={whatsapp} alt=""/>
                    <p>What's App</p>
                </div>
                <div>
                    <img src={phone} alt=""/>
                    <p>Phone Number</p>
                </div>
            </div>
        </div>
    </main>
    )
}