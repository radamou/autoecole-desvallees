import React from "react";
import { useStyles } from 'assets/react/components/style/organisms/sidebar/sidebarMenu'
import { menu } from "assets/data/menu";
import TrafficIcon from '@material-ui/icons/Traffic';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function SidebarMenu() {
    const classes = useStyles();

    return (
        <ul className={classes.root}>
            <li className={classes.list}>
                <TrafficIcon fontSize={"small"} className={classes.icon}/>
                <a href="https://public.codesrousseau.fr/" className={classes.href} target="_blank">
                    {menu.code}
                </a>
            </li>
            <li className={classes.list}>
                <DirectionsCarIcon fontSize={"small"} className={classes.icon}/>
                <a href="/rendez-vous" className={classes.href}>{menu.conduct}</a>
            </li>
            <li className={classes.list}>
                <ShoppingCartIcon fontSize={"small"} className={classes.icon}/>
                <a href="/boutique" className={classes.href}>{menu.shop}</a>
            </li>
        </ul>
    );
}