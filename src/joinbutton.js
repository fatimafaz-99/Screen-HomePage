import React from "react";
import './joinbutton.css';

function clickme() {
    alert('you clicked this button')
}

export default function JoinButton() {
    return (
        <a class="btn" href="#" onClick={clickme}>
            <span >
                <h1 className="buttontext" >JOIN</h1></span>
        </a >
    );
}