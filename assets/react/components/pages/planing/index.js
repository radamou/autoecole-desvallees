import React from "react";
import { styles } from "assets/react/components/style/pages/shop";
import Sidebar from "assets/react/components/organisms/sidebar";
import GlobalHeader from "assets/react/components/organisms/globalHeader";
import { user } from 'assets/data/user'
import Calendar from "assets/react/components/organisms/planing/form";


export default function Planing() {
    const style = styles();

    return (
        <div className={ style.root }>
            <div className={style.container}>
                <GlobalHeader user={user}/>
                <Sidebar/>
                <Calendar />
            </div>
        </div>
    )
}