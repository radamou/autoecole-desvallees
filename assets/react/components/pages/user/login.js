import React from 'react';
import { formStyles } from "assets/react/components/style/pages/user";
import image from 'assets/images/car.jpg';
import logo from 'assets/images/logo.png'
import FormSideContainer from "assets/react/components/organisms/user/formSideContainer";
import FormLogo from "assets/react/components/organisms/user/formLogo";
import {fr} from "assets/translation/fr";
import SocialNetwork from "assets/react/components/organisms/user/socialNetwork";
import FormSeparator from "assets/react/components/organisms/user/separator";
import {INSCRIPTION_LINK} from "assets/routing";

export default function Login() {
    const formStyle = formStyles();

    return (
        <div className={ formStyle.root }>
            <FormSideContainer image={image} />
            <form className={formStyle.form}>
                <div className={formStyle.formContainer}>
                    <FormLogo image={logo} />
                    <SocialNetwork
                        alt={fr.socialNetworkIconAlt.connexion}
                        button={fr.socialNetworkButton.connexion}
                    />
                   <FormSeparator title={fr.form.separator.connexion.title} />
                    <p className={formStyle.formTitle}>{fr.form.login.title}</p>
                    <p className={formStyle.formDescription}>{fr.form.login.description}</p>
                    <div className={formStyle.formField}>
                        <label className={formStyle.controlLabel}>{fr.form.login.fields.email}</label>
                        <input type="email" placeholder="votreemail@email.com" className={formStyle.formControl} />
                    </div>
                    <div className={formStyle.formField}>
                        <label className={formStyle.controlLabel}>{fr.form.login.fields.password}</label>
                        <input type="password" placeholder="password" className={formStyle.formControl} />
                    </div>
                    <div className={formStyle.formGroup}>
                        <p className={formStyle.inscriptionTitle}>{fr.form.login.inscriptionTitle}
                            <a
                            href={INSCRIPTION_LINK}
                            className={formStyle.link}>
                                {fr.form.login.inscriptionLinkTitle}
                            </a>
                        </p>
                        <button className={formStyle.formSubmitButton} type="submit">
                            {fr.form.login.connexionButton}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
