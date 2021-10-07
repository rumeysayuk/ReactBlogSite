import React from "react";
import styles from "./style";
const Header = () => {
    const classes=styles();
    return (
        <div className="container">
            <div className={classes.footer}>
                <div><p style={{paddingLeft:20}}>Developed by Rümeysa YÜK</p></div>
                <div className="d-flex">
                    <a href="https://www.instagram.com/rumeysayuk1/"><img alt="green iguana" src="https://img.icons8.com/color/30/000000/instagram-new--v1.png"/></a>
                    <a href="https://github.com/rumeysayuk"><img alt="green iguana" src="https://img.icons8.com/fluency/30/000000/github.png"/></a>
                </div>

            </div>
        </div>

    )
}

export default Header;
