import React from "react"

export default function WL(){
    return(
        <>
        <div id="wl">
        <div id="map">
            <h1>Location</h1>
            <iframe title="Location map" id="m" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2054.9268182196106!2d77.18739493411704!3d28.5636084786119!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d0d808b64ef%3A0xf8770f492ce41a9a!2sCentral%20Government%20Residential%20Complex%2C%20Mohammadpur%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1765016476263!5m2!1sen!2sin" width={800} height={600} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> 
        <div id="wea">
            <div id="first"><h1>Weather</h1></div>
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div className="elfsight-app-4c1e39a0-e44c-4c6d-95a2-646e339f6a6f" data-elfsight-app-lazy></div>
        </div>
        </div>
        </>
    )
}