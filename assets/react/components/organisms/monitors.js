import React from 'react';
import { styles } from "assets/react/components/style/organisms/monitors";
import MonitorCard from "assets/react/components/organisms/monitorCard";
import { fr } from "assets/translation/fr";

export default function Monitors() {
    const style = styles();

    return (
        <div className={style.monitors}>
            <h2 className={style.title}>{fr.monitors.title}</h2>
            <div className={style.monitorList}>
                <MonitorCard />
                <MonitorCard />
                <MonitorCard />
            </div>
        </div>
    )
}
