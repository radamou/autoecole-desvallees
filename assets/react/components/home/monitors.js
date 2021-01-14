import React from 'react';
import { styles } from "assets/react/components/home/monitorsStyle";
import MonitorCard from "assets/react/components/organisms/monitorCard";

export default function Monitors() {
    const style = styles();

    return (
        <div className={style.monitors}>
            <h2 className={style.title}>Moniteurs de conduite salariés et diplômés</h2>
            <div className={style.monitorList}>
                <MonitorCard />
                <MonitorCard />
                <MonitorCard />
            </div>
        </div>
    )
}
