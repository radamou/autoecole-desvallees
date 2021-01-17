import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
        margin: 20,
        width: '28%',
        [theme.breakpoints.down("xs")]: {
            width: '90%'
        }
    },
    media: {
        height: 300,
    },

    link: {
        textDecoration: 'none',
    },
    nameContainer: {
        paddingTop: 20
    },

    name: {
        fontSize: 15,
        fontWeight: 700,
        color: '#d3215f',
    }
}));
