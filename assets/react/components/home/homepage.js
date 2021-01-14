import React from 'react';
import { styles } from "assets/react/components/home/style";
import Header from "assets/react/components/home/header";
import Results from "assets/react/components/home/results";
import Formulas from "assets/react/components/home/formulas";
import Monitors from "assets/react/components/home/monitors";

export default function Home() {
    const style = styles();

    return (
        <div className={ style.root }>
            <div className={style.container}>
                <Header/>
                <Results/>
            </div>
            <Formulas />
            <Monitors />
        </div>
    )
}
