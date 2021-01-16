import React from 'react';
import { formStyles } from "assets/react/components/style/pages/user";
import {fr} from "assets/translation/fr";

export default function FormSideContainer(props) {
    const formStyle = formStyles();

    return (
        <div className={ formStyle.rootPresentation }>
            <img
                className={formStyle.rootPresentationImage}
                src={props.image} alt={fr.logo.alt}
            />
        </div>
    );
}