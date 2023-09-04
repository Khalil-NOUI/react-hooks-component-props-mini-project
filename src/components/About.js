import React from "react";

function About(props){
    return (
        <aside style={{color: "Wheat", justifyContent: "center", alignItems: "center"}}>
        <img style={{width:"50px", height:"50px",}} src={props.image} alt="blog logo"/>
        <p> {props.about} <br></br> by : <a href = "https://www.linkedin.com/in/khalil-noui-pr?originalSubdomain=dz" style={{color:"LightCoral"}}>K.N</a> </p>
        </aside>

    )
}

export default About;
