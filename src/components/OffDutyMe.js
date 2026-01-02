import React from "react"
import img3 from "../assets/lj/lj3.png";
import img4 from "../assets/lj/lj4.png";
import img5 from "../assets/lj/lj5.png";
import img6 from "../assets/lj/lj6.png";

export default function Off_duty_me(){
    return(
        <>
        <main id="main3">
        <div id="into">
            <h2>
                Off-Duty Me</h2>
            <p className="heading">The <b>Stuff</b> I'm Into !</p>
            <div id="h3">
                <hr className="h3"/>
            </div>
            <br/>
            <div id="content3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam tempore voluptatum non ipsa quod
                    cum
                    architecto sapiente praesentium, expedita fuga nam saepe quam ipsam! Doloremque temporibus quas
                    mollitia.
                    Facilis, voluptatum?</p>
            </div>
            <button>VIEW ALL</button>
        </div>
        <div id="boxes">
            <div id="box1">
                <div className="box"><img src={img3} alt=""/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className="box"><img src={img4} alt=""/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div id="box2">
                <div className="box"><img src={img5} alt=""/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className="box"><img src={img6} alt=""/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </main>
    <br/>
    <hr/>
    </>
    )
}