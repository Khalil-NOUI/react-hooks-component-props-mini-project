import React from "react";

function Header(props) {
    return(
        <header style={{color: "NavajoWhite", textAlign : "center"}}>
            <h1> {props.name} </h1>
        </header>
    )
}
export default Header;
