import React from "react";
import { styles } from 'assets/react/components/style/organisms/globalHeader'
import GlobalHeaderMenu from "assets/react/components/organisms/globalHeaderMenu";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {withStyles} from "@material-ui/core/styles";

export default function GlobalHeader(props) {
    const classes = styles();
    const StyledBasketIcon = withStyles((theme) => ({
        root: {
            height: '15px',
            width: '15px',
            borderRadius: '50%',
            padding: '7px',
            backgroundColor: '#d3215f',
            color: '#fff',
            cursor: 'pointer'
        },
    }))(ShoppingBasketIcon);

    return (
        <header className={classes.root}>
            <ul className={classes.menu}>
                <li><StyledBasketIcon fontSize={"small"} /></li>
                <li className={classes.separator} />
                <li><GlobalHeaderMenu user={props.user}/></li>
            </ul>
        </header>
    );
}