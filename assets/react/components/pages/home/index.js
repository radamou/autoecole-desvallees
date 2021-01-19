import React from 'react';
import { styles } from "assets/react/components/style/pages/home";
import Header from "assets/react/components/pages/home/header";
import Statistics from "assets/react/components/organisms/statistics/statistics";
import Formulas from "assets/react/components/organisms/formulas/formulas";
import Monitors from "assets/react/components/organisms/monitors/monitors";

export default function Home() {
    const style = styles();

    return (
        <div className={ style.root }>
            <div className={style.container}>
                <Header/>
                <Statistics/>
            </div>
            <Formulas />
            <Monitors />
        </div>
    )
}
