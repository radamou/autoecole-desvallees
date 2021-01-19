import React from "react";
import { menu } from "assets/data/menu";
import { useStyles } from "assets/react/components/style/organisms/globalHeader/menu";
import {BOOK_LINK} from "assets/routing";

export default function Menu() {
    const classes = useStyles();

    return (
        <ul className={classes.root}>
            <li className={classes.list}>
                <a href={BOOK_LINK} className={classes.href}>{menu.trafficCodeExam}</a>
            </li>
            <li className={classes.list}>
                <a href={BOOK_LINK}  className={classes.href}>{menu.licenceExam}</a>
            </li>
        </ul>
    );
}