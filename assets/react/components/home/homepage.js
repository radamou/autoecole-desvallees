import React from 'react';
import { styles } from "assets/react/components/home/style";
import Header from "assets/react/components/home/header";

export default function Home() {
    const style = styles();

    return (
        <div className={ style.root }>
            <div className={style.container}>
                <Header/>
            </div>
        </div>
    )
}
