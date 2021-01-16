import React from "react";
import { styles } from 'assets/react/components/style/organisms/globalHeader'
import logo from "assets/images/logo.png";
import { HOME_PAGE } from "assets/routing";
import { fr } from "assets/translation/fr";

export default function GlobalHeader() {
    const classes = styles();

    return (
        <div className={classes.root}>
            <div className={classes.logoContainer}>
                <a href={ HOME_PAGE }>
                    <img
                        className={classes.LogoImg}
                        src={logo} alt={ fr.logo.alt }
                    />
                </a>
            </div>
        </div>
    );
}