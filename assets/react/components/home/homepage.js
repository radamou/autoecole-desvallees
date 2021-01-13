import React from 'react';
import { styles } from "assets/react/components/home/style";
import Header from "assets/react/components/home/header";
import Results from "assets/react/components/home/results";

export default function Home() {
    const style = styles();

    return (
        <div className={ style.root }>
            <div className={style.container}>
                <Header/>
                <Results/>
            </div>
        </div>
    )
}
