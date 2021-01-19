import React from 'react';
import { styles } from "assets/react/components/style/organisms/statistics/statistics";
import { fr } from "assets/translation/fr";
import { statistics } from "assets/data/statistics";

export default function Statistics() {
    const style = styles();

    return (
        <div className={style.root}>
            <h1 className={style.title}>{ fr.statistics.title }</h1>
            <div className={style.resultsNumbers}>
                <div className={style.resultNumbersBlock}>
                    <p className={style.title}>{statistics.codeSuccess.rate}</p>
                    <span>{statistics.codeSuccess.title}</span>
                </div>
                <div className={style.resultNumbersBlock}>
                    <p className={style.title}>{statistics.conductSuccess.rate}</p>
                    <span>{statistics.conductSuccess.title}</span>
                </div>
                <div>
                    <p className={style.title}>{statistics.users.grade}</p>
                    <span>{statistics.users.title}</span>
                </div>
            </div>
        </div>
    )
}
