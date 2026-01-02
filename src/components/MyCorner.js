import React from "react"
import lj2 from "../assets/lj/lj2.png"
import ChatGPT from "../assets/lj/ChatGPT Image Dec 22, 2025 at 02_34_31 PM.png"
import me from "../assets/lj/7.png"

export default function My_corner(){
    return(
        <>
        <main id="main2">
        <div id="myimg"><img src={lj2} alt="me"/></div>
        <div id="corner">
            <h2>
                Meet_Me</h2>
            <p className="p">WHO AM <b>I</b>?</p>
            <div id="hr2">
                <hr className="hr2"/>
            </div><br/>
            <div id="para2">
                <p className="l">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
                    consequatur mollitia. Id rerum,
                    voluptatibus doloremque et dolor, tempora pariatur illum consequuntur culpa rem possimus
                    perspiciatis
                    dolorem voluptates excepturi, recusandae iure!</p>
                <div id="logo">
                    <div id="logo1">
                        <img src={ChatGPT} alt="logo"/>
                        <p className="l">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptate, corrupti. Officiis, repellendus.</p>
                    </div>
                    <div id="logo2">
                        <img src={me} alt="logo"/>
                        <p className="l">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptate, corrupti. Officiis, repellendus.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <br/>
    <hr/>
    </>
    )
}