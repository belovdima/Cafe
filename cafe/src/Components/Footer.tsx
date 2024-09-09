import React from "react";
import "./../Styles/SCSS/_Footer.scss"

function Footer() {

    const date:number  = new Date().getFullYear()

    return (
        <div className="footer">
           © {date}

        </div>
    );
}

export default Footer

