import React from 'react';
import { styles } from "assets/react/components/style/organisms/formulas/formulas";
import MediaCard from "assets/react/components/organisms/formulas/card";

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
