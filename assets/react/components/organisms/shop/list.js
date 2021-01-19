import { useStyles } from "assets/react/components/style/organisms/shop/list";

import React from "react";
import ShopCard from "assets/react/components/organisms/shop/card";

export default function ShopList() {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <h1 className={classes.title}>Boutique</h1>
            <ShopCard />
        </div>
    )
}