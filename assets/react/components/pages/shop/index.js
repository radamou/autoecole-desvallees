import { styles } from "assets/react/components/style/pages/shop";
import Header from "assets/react/components/organisms/globalHeader";
import React from "react";

export default function Shop() {
    const style = styles();

    return (
        <div className={ style.root }>
            <div className={style.container}>
                <Header/>
            </div>
        </div>
    )
}