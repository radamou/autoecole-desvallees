import React from "react";
import { styles } from 'assets/react/components/style/organisms/globalHeader'
import logo from "assets/images/logo.png";

export default function GlobalHeader() {
    const classes = styles();

    return (
        <div className={classes.root}>
            <div className={classes.logoContainer}>
                <a href="/">
                    <img
                        className={ classes.LogoImg}
                        src={logo} alt="auto école des vallées"
                    />
                </a>
            </div>
        </div>
    );
}