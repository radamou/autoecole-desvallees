import React from 'react';
import { styles } from "assets/react/components/style/organisms/statistics";

export default function Statistics() {
    const style = styles();

    return (
        <div className={style.root}>
            <h1 className={style.title}>Auto-école traditionnelle, resultats expceptionnels</h1>
            <div className={style.resultsNumbers}>
                <div className={style.resultNumbersBlock}>
                    <p className={style.title}>92%</p>
                    <span>Taux de réussite au code</span>
                </div>
                <div className={style.resultNumbersBlock}>
                    <p className={style.title}>92%</p>
                    <span>Taux de réussite au Conduite</span>
                </div>
                <div>
                    <p className={style.title}>4.9/5</p>
                    <span>Avis utilisateurs</span>
                </div>
            </div>
        </div>
    )
}
