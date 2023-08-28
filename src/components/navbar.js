import React, { useState } from "react";
import ContactMe from "./contactMe";
import "./styles.css"
function Navbar() {
    return  (
        <div className="main-div">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button>About Me</button>
                    <button>Project</button>
                    <button>Resume</button>
                    <button>Contact Me</button>
                </div>
            </nav>
        </div>
    )
    ;
}
export default Navbar;