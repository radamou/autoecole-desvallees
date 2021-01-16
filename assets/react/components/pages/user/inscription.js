import React from 'react';
import { formStyles } from "assets/react/components/style/pages/user";
import image from 'assets/images/inscription.jpg';
import logo from 'assets/images/logo.png'
import { fr } from "assets/translation/fr";
import FormSideContainer from "assets/react/components/organisms/user/formSideContainer";
import FormLogo from "assets/react/components/organisms/user/formLogo";
import SocialNetwork from "assets/react/components/organisms/user/socialNetwork";
import FormSeparator from "assets/react/components/organisms/user/separator";
import {LOGIN_LINK} from "assets/routing";

export default function Inscription() {
    const formStyle = formStyles();

    return (
        <div className={ formStyle.root }>
            <FormSideContainer image={image} />
            <form className={formStyle.form}>
                <div className={formStyle.formContainer}>
                    <FormLogo image={logo} />
                    <SocialNetwork
                        alt={fr.socialNetworkIconAlt.inscription}
                        button={fr.socialNetworkButton.inscription}
                    />
                    <FormSeparator title={fr.form.separator.inscription.title} />
                    <p className={formStyle.formTitle}>{fr.form.inscription.title}</p>
                    <p className={formStyle.formDescription}>{fr.form.inscription.description}</p>
                    <div className={formStyle.group}>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>{fr.form.inscription.fields.lastName}</label>
                            <input
                                type="text"
                                placeholder={fr.form.inscription.fields.lastName}
                                className={formStyle.formControl}
                            />
                        </div>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>{fr.form.inscription.fields.name}</label>
                            <input
                                type="text"
                                placeholder={fr.form.inscription.fields.name}
                                className={formStyle.formControl}
                            />
                        </div>
                    </div>
                    <div className={formStyle.group}>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>{fr.form.inscription.fields.email}</label>
                            <input type="email" placeholder="email@email.com" className={formStyle.formControl} />
                        </div>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>{fr.form.inscription.fields.number}</label>
                            <input
                                type="text"
                                placeholder={fr.form.inscription.fields.number}
                                className={formStyle.formControl}
                            />
                        </div>
                    </div>
                    <div className={formStyle.formField}>
                        <label className={formStyle.controlLabel}>{fr.form.inscription.fields.password}</label>
                        <input
                            type="password"
                            placeholder={fr.form.inscription.fields.password}
                            className={formStyle.formControl}
                        />
                    </div>
                    <div className={formStyle.formField}>
                        <label className={formStyle.controlLabel}>{fr.form.inscription.fields.bornDate}</label>
                        <input type="date" placeholder="jj/mm/aaaa" className={formStyle.formControl} />
                    </div>
                    <div className={formStyle.group}>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>
                                {fr.form.inscription.fields.address.road}
                            </label>
                            <input
                                type="text"
                                placeholder={fr.form.inscription.fields.address.road}
                                className={formStyle.formControl}
                            />
                        </div>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>
                                {fr.form.inscription.fields.address.town}
                            </label>
                            <input
                                type="text"
                                placeholder={fr.form.inscription.fields.address.town}
                                className={formStyle.formControl}
                            />
                        </div>
                    </div>
                    <div className={formStyle.group}>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>
                                {fr.form.inscription.fields.address.zip}
                            </label>
                            <input
                                type="text"
                                placeholder={fr.form.inscription.fields.address.zip}
                                className={formStyle.formControl}
                            />
                        </div>
                        <div className={formStyle.formField}>
                            <label className={formStyle.controlLabel}>
                                {fr.form.inscription.fields.address.department}
                            </label>
                            <input type="text" placeholder="exp: Val-de-Marne" className={formStyle.formControl} />
                        </div>
                    </div>
                    <div className={formStyle.formGroup}>
                        <p className={formStyle.inscriptionTitle}>{fr.form.inscription.loginTitle}
                            <a
                                href={LOGIN_LINK}
                                className={formStyle.link}>
                                {fr.form.inscription.loginLinkTitle}
                            </a>
                        </p>
                        <button className={formStyle.formSubmitButton} type="submit">
                            {fr.form.inscription.inscriptionButton}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
