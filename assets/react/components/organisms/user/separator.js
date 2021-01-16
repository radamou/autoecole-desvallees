import React from 'react';
import { formStyles } from "assets/react/components/style/pages/user";


export default function FormSeparator(props) {
    const formStyle = formStyles();

    return (
        <div className={formStyle.separator}>
            <span className={formStyle.separatorText}>{props.title}</span>
        </div>
    )
}