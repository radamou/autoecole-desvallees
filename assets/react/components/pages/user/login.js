import React from 'react';
import { formStyles } from "assets/react/components/style/pages/user";
import image from 'assets/images/car.jpg';
import logo from 'assets/images/logo.png'
import facebook from 'assets/images/facebook.svg'
import gmail from 'assets/images/gmail.svg'

export default function Login() {
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
                        <a href="/">
                            <img
                                className={ formStyle.formLogoImage}
                                src={logo} alt="auto école des vallées"
                            />
                        </a>
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
                    <div className={formStyle.separator}>
                        <span className={formStyle.separatorText}>Connectez-vous avec</span>
                    </div>
                    <p className={formStyle.formTitle}>Connexion</p>
                    <p className={formStyle.formDescription}>
                        Veuillez renseigner vos identifiants de connexion
                    </p>
                    <div className={formStyle.formField}>
                        <label className={formStyle.controlLabel}>Adresse Email</label>
                        <input type="email" placeholder="votreemail@email.com" className={formStyle.formControl} />
                    </div>
                    <div className={formStyle.formField}>
                        <label className={formStyle.controlLabel}>Mot de passe</label>
                        <input type="password" placeholder="votreemail@email.com" className={formStyle.formControl} />
                    </div>
                    <div className={formStyle.formGroup}>
                        <p className={formStyle.inscriptionTitle}>Vous n'avez pas encore de compte ?
                            <a
                            href="/inscription"
                            className={formStyle.link}>
                                Inscription
                            </a>
                        </p>
                        <button className={formStyle.formSubmitButton} type="submit">
                            Connexion
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
