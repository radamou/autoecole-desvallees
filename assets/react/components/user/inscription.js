import React from 'react';
import { inscriptionStyles } from "./inscriptionStyle";
import { formStyles } from "assets/react/components/ui/formFieldStyle";
import image from 'assets/images/inscription.jpg';
import logo from 'assets/images/logo.png'
import facebook from 'assets/images/facebook.svg'
import gmail from 'assets/images/gmail.svg'

export default function Inscription() {
    const inscription = inscriptionStyles();
    const formStyle = formStyles();

    return (
        <div className={ formStyle.root }>
            <div className={ formStyle.rootPresentation }>
                <img
                    className={formStyle.rootPresentationImage}
                    src={image} alt="auto ecole des vallées"
                />
            </div>
            <form className={formStyle.form}>
                <div className={formStyle.formContainer}>
                    <div className={formStyle.formLogoContainer}>
                        <img
                            className={ formStyle.formLogoImage}
                            src={logo} alt="auto école des vallées"
                        />
                    </div>
                    <p className={formStyle.formTitle}>Inscription</p>
                    <p className={formStyle.formDescription}>
                        Créer votre nouveau compte
                    </p>
                    <div className={formStyle.formField}>
                        <label className={formStyle.controlLabel}>Adresse Email</label>
                        <input type="email" placeholder="votreemail@email.com" className={formStyle.formControl} />
                    </div>
                    <div className={formStyle.formField}>
                        <label className={formStyle.controlLabel}>Mot de passe</label>
                        <input type="password" placeholder="votreemail@email.com" className={formStyle.formControl} />
                    </div>
                    <div className={formStyle.formSubmitGroup}>
                        <p className={formStyle.inscriptionTitle}>Vous êtes déjè inscrit ?
                            <a
                                href="/login"
                                className={formStyle.link}>
                                connectez-vous
                            </a>
                        </p>
                        <button className={formStyle.formSubmitButton} type="submit">
                            Connexion
                        </button>
                    </div>
                    <div className={formStyle.connexionSeparator}>
                        <span className={formStyle.loginSeparatorText}>Connectez-vous avec</span>
                    </div>
                    <div className={formStyle.SocialMediaLogin}>
                        <button className={formStyle.socialMediaButton}>
                            <span className={formStyle.socialMediaText}><img src={facebook} alt="connexion facebook"/></span>
                            Connexion avec facebook
                        </button>
                        <button className={formStyle.socialMediaButton}>
                            <span className={formStyle.socialMediaText}>
                                <img className={formStyle.connexionImg} src={gmail} alt="connexion gmail"/>
                            </span>
                            Connexion avec Gmail
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
