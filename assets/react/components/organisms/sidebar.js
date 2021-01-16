import React from "react";
import { styles } from 'assets/react/components/style/organisms/sidebar'
import logo from "assets/images/logo.png";
import { HOME_PAGE } from "assets/routing";
import { fr } from "assets/translation/fr";

export default function Sidebar() {
    const classes = styles();

    return (
        <aside className={classes.root}>
            <div className={classes.logoContainer}>
                <a href={ HOME_PAGE }>
                    <img
                        className={classes.LogoImg}
                        src={logo} alt={ fr.logo.alt }
                    />
                </a>
            </div>
        </aside>
    );
}