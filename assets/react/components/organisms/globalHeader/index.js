import React from "react";
import { styles } from 'assets/react/components/style/organisms/globalHeader'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { withStyles } from "@material-ui/core/styles";
import MenuUser from "assets/react/components/organisms/globalHeader/menuUser";
import Menu from "assets/react/components/organisms/globalHeader/menu";

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
            <div className={classes.menu}>
                <Menu />
            </div>
            <ul className={classes.menuUser}>
                <li><StyledBasketIcon fontSize={"small"} /></li>
                <li className={classes.separator} />
                <li><MenuUser user={props.user}/></li>
            </ul>
        </header>
    );
}