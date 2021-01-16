import React from "react";
import { styles } from "assets/react/components/style/pages/shop";
import Sidebar from "assets/react/components/organisms/sidebar";
import GlobalHeader from "assets/react/components/organisms/globalHeader";
import { user } from 'assets/data/user'


export default function Planing() {
    const style = styles();

    return (
        <div className={ style.root }>
            <div className={style.container}>
                <GlobalHeader user={user}/>
                <Sidebar/>
            </div>
        </div>
    )
}