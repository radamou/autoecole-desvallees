import React from 'react';
import { formStyles } from "assets/react/components/ui/formFieldStyle";
import image from 'assets/images/inscription.jpg';
import logo from 'assets/images/logo.png'
import facebook from 'assets/images/facebook.svg'
import gmail from 'assets/images/gmail.svg'

export default function Inscription() {
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
                    <div className={formStyle.SocialMediaLogin}>
                        <button className={formStyle.socialMediaButton}>
                            <span className={formStyle.socialMediaText}><img src={facebook} alt="connexion facebook"/></span>
                            Créer un compte via facebook
                        </button>
                        <button className={formStyle.socialMediaButton}>
                            <span className={formStyle.socialMediaText}>
                                <img className={formStyle.connexionImg} src={gmail} alt="connexion gmail"/>
                            </span>
                            Créer un compte via Gmail
                        </button>
                    </div>
                    <div className={formStyle.separator}>
                        <span className={formStyle.separatorText}>ou</span>
                    </div>
                    <p className={formStyle.formTitle}>Inscription</p>
                    <p className={formStyle.formDescription}>
                        Créer un nouveau compte
                    </p>
                    <div className={formStyle.group}>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>Prénom</label>
                            <input type="text" placeholder="prénom" className={formStyle.formControl} />
                        </div>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>Nom</label>
                            <input type="text" placeholder="nom" className={formStyle.formControl} />
                        </div>
                    </div>
                    <div className={formStyle.group}>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>Adresse Email</label>
                            <input type="email" placeholder="email@email.com" className={formStyle.formControl} />
                        </div>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>Numéro de téléphone</label>
                            <input type="text" placeholder="numéro de téléphone" className={formStyle.formControl} />
                        </div>
                    </div>
                    <div className={formStyle.formField}>
                        <label className={formStyle.controlLabel}>Mot de passe</label>
                        <input type="password" placeholder="mot de passe" className={formStyle.formControl} />
                    </div>
                    <div className={formStyle.formField}>
                        <label className={formStyle.controlLabel}>Date de naissance</label>
                        <input type="date" placeholder="jj/mm/aaaa" className={formStyle.formControl} />
                    </div>
                    <div className={formStyle.group}>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>Numéro et nom de la voie</label>
                            <input type="text" placeholder="numéro et nom de la voie" className={formStyle.formControl} />
                        </div>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>Ville</label>
                            <input type="text" placeholder="ville" className={formStyle.formControl} />
                        </div>
                    </div>
                    <div className={formStyle.group}>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>Code Postal</label>
                            <input type="text" placeholder="code postal" className={formStyle.formControl} />
                        </div>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>Département</label>
                            <input type="text" placeholder="exp: Département" className={formStyle.formControl} />
                        </div>
                    </div>
                    <div className={formStyle.formGroup}>
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
                </div>
            </form>
        </div>
    )
}
