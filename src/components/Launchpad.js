import React from "react"
import lj1 from "../assets/lj/lj1.png"

export default function Launchpad(){
    return(
        <>
        <div id="main1">
            <main>
                <h2>CREATIVE Designer</h2>
                <p className="p"><b>I'M</b> LAKSHYA</p>
                <p className="p">Jagdandia</p>
                <div id="hr">
                    <hr id="line1"/>
                </div><br/>
                <p id="l">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis laboriosam quam non, molestiae vero doloribus consequatur magnam minima ad dolorem, vel
                    sequi. Odio eligendi quasi ipsam cumque ut, dolor dicta.</p>
            </main>
            <div id="img2"><img src={lj1} alt="me who else"/></div>
        </div>
        <br/>
        <hr/>
        </>
    )
}