import React from 'react';
import { styles } from "assets/react/components/style/pages/home";
import logo from "assets/images/logo.png";

export default function Header() {
    const style = styles();

    return (
        <header className={ style.header }>
            <div className={style.headerMenuContainer}>
                <div className={style.logoHeader}>
                    <a href="/">
                        <img
                            className={ style.logoImage }
                            src={logo} alt="auto école des vallées"
                        />
                    </a>
                </div>
                <div className={style.headerCourseShopContainer}>
                    <div className={style.shop}><a href="/boutique" className={style.userLink}>Boutique</a></div>
                <div className={style.course}>
                    <a href="/rendez-vous" className={style.userLink}>Prendre un rendez-vous</a>
                </div>
                </div>
                <div className={style.headerUser}>
                    <p className={style.userInscriptionTitle}>
                        <a
                            href="/login"
                            className={style.userLink}>
                            connexion
                        </a>
                    </p>
                    <button className={style.userFormSubmitButton} type="submit">
                        <a
                            href="/inscription"
                            className={style.userLink}>
                            Inscription
                        </a>
                    </button>
                </div>
            </div>
        </header>
    )
}
