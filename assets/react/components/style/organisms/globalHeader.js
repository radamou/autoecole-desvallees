import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
    root: {
        zIndex: 999,
        position: 'fixed',
        width: '90%',
        left: '11.5%',
        backgroundColor: '#fff',
        height: '5rem',
        borderBottom: '1px solid #E9ECEF',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        [theme.breakpoints.between("sm", "lg")]: {
            left: '17%',
        },
        [theme.breakpoints.down("xs")]: {
            width: '25%',
        }
    },
    
    menu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '15%',
        alignItems: 'center',
        paddingRight: '3%',
        listStyle: 'none',
        [theme.breakpoints.between("sm", "lg")]: {
            width: '25%',
            paddingRight: '8%'
        },
        [theme.breakpoints.down("xs")]: {
            width: '60%',
        },
    },

    separator: {
        width: '1px',
        height: '32px',
        backgroundColor: '#E9ECEF'
    }
}))