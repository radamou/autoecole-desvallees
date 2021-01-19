import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles( theme => ({
    root: {  display: 'flex',
        flexDirection: 'column',
        padding: 0,
        marginTop: '6.6rem',
        [theme.breakpoints.between("sm", "lg")]: {
        },
        [theme.breakpoints.down("xs")]: {
        },
        listStyle: 'none'
    },

    list: {
        margin: '.6rem 0',
        display: 'flex',
        alignItems: 'center'
    },
    href: {
        textDecoration: 'none',
        color: '#000',
        padding: '.68rem .98rem',
        fontWeight: '500'
    },

    icon: {
        color: "#9aaeb3"
    }
}))