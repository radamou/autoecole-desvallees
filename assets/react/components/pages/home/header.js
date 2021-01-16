import React from 'react';
import { styles } from "assets/react/components/style/pages/home";
import logo from "assets/images/logo.png";
import {
    SHOP_LINK,
    BOOK_LINK,
    LOGIN_LINK,
    INSCRIPTION_LINK,
    HOME_PAGE
} from "assets/routing";
import { fr } from "assets/translation/fr";

export default function Header() {
    const style = styles();

    return (
        <header className={ style.header }>
            <div className={ style.headerMenuContainer }>
                <div className={style.logoHeader}>
                    <a href={ HOME_PAGE }>
                        <img
                            className={ style.logoImage }
                            src={logo} alt={fr.logo.alt}
                        />
                    </a>
                </div>
                <div className={style.headerCourseShopContainer}>
                    <div><a href={SHOP_LINK} className={style.userLink}>{ fr.shopTitle }</a></div>
                <div>
                    <a href={ BOOK_LINK } className={style.userLink}>{fr.bookingTitle}</a>
                </div>
                </div>
                <div className={style.headerUser}>
                    <p className={style.userInscriptionTitle}>
                        <a href={LOGIN_LINK} className={style.userLink}>
                            { fr.connexion }
                        </a>
                    </p>
                    <button className={style.userFormSubmitButton} type="submit">
                        <a href={INSCRIPTION_LINK} className={style.userLink}>
                            { fr.inscription }
                        </a>
                    </button>
                </div>
            </div>
        </header>
    )
}
