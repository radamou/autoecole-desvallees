import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LockIcon from '@material-ui/icons/Lock';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { fr } from "assets/translation/fr";
import {useStyles} from "assets/react/components/style/organisms/globalHeader/menuUser";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #E9ECEF'
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: '#E9ECEF',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        }
    },
}))(MenuItem);

export default function MenuUser(props) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div className={classes.root} aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
                <img className="test"/>
                <span>
                    {props.user.name} {props.user.lastName}
                </span>
                <KeyboardArrowDownIcon fontSize="small" />
            </div>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    <span>{fr.globalHeaderMenu.accountAccess}</span>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <HelpOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    <span>{fr.globalHeaderMenu.help}</span>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <LockIcon fontSize="small" />
                    </ListItemIcon>
                    <span>{fr.globalHeaderMenu.disconnect}</span>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}