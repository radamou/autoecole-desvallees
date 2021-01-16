import React from "react";
import { styles } from "assets/react/components/style/pages/shop";
import Header from "assets/react/components/organisms/globalHeader";

export default function Planing() {
    const style = styles();

    return (
        <div className={ style.root }>
            <div className={style.container}>
                <Header/>
            </div>
        </div>
    )
}