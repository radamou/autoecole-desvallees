import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles( theme => ({
    root: {  display: 'flex',
        flexDirection: 'row',
        padding: 0,
        [theme.breakpoints.between("sm", "lg")]: {
        },
        [theme.breakpoints.down("xs")]: {
        },
        listStyle: 'none'
    },

    list: {
        margin: '.6rem 0',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    href: {
        textDecoration: 'none',
        color: '#000',
        fontSize:'15px',
        padding: '.68rem .98rem',
        fontWeight: '500'
    }
}))