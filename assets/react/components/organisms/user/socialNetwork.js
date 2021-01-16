import React from 'react';
import { formStyles } from "assets/react/components/style/pages/user";
import facebook from "assets/images/facebook.svg";
import gmail from "assets/images/gmail.svg";

export default function SocialNetwork(props) {
    console.log(props);
    const formStyle = formStyles();

    return (
        <div className={formStyle.SocialMediaLogin}>
            <button className={formStyle.socialMediaButton}>
                <span className={formStyle.socialMediaText}>
                    <img src={facebook} alt={props.alt.facebook}/>
                </span>
                {props.button.facebook}
            </button>
            <button className={formStyle.socialMediaButton}>
                <span className={formStyle.socialMediaText}>
                    <img
                        className={formStyle.gmailImg}
                        src={gmail} alt={props.alt.gmail}
                    />
                </span>
                {props.button.gmail}
            </button>
        </div>
    )
}