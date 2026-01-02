import React from "react"
import lj from "../assets/lj/ChatGPT Image Dec 22, 2025 at 06_56_13 PM.png"

export default function Navbar(){
    return(
        <header id="header1">
            <nav id="nav">
                <img src={lj} alt="lakshya"/>
                <ul>
                    <li>Launchpad</li>
                    <li>MY_CORNER</li>
                    <li>Off_Duty_Me</li>
                    <li>Summon_Me</li>
                </ul>
            </nav>
        </header>
    )
}