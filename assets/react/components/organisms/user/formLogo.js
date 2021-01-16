import React from 'react';
import { formStyles } from "assets/react/components/style/pages/user";
import { fr } from "assets/translation/fr";
import { HOME_PAGE } from "assets/routing";

export default function FormLogo(props) {
    const formStyle = formStyles();

    return (
        <div className={formStyle.formLogoContainer}>
            <a href={ HOME_PAGE }>
                <img
                    className={formStyle.formLogoImage}
                    src={props.image} alt={ fr.logo.alt }
                />
            </a>
        </div>
    );
}