import React from 'react';
import { styles } from "assets/react/components/home/formulasStyle";
import MediaCard from "assets/react/components/organisms/card";

export default function Formulas() {
    const style = styles();

    return (
        <div className={style.root}>
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </div>
    )
}
