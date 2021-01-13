import React from 'react';
import { styles } from "assets/react/components/home/style";
import logo from "assets/images/logo.png";

export default function Header() {
    const style = styles();

    return (
        <header className={ style.header }>
            <div className={style.headerMenuContainer}>
                <div className={style.logoHeader}>
                    <img
                        className={ style.logoImage }
                        src={logo} alt="auto école des vallées"
                    />
                </div>
                <div className={style.headerCourseShopContainer}>
                    <div className={style.shop}>Boutique</div>
                    <div className={style.course}>Conduite</div>
                </div>
                <div className={style.headerUser}>
                    <p className={style.userInscriptionTitle}>
                        <a
                            href="/login"
                            className={style.userLink}>
                            connectez-vous
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
