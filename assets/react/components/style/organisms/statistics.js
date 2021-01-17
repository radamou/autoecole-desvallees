import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme =>({
    root: {
        width: '50%',
        [theme.breakpoints.between("md", "lg")]: {
            width: '70%',
        },
        [theme.breakpoints.down("sm")]: {
            width: '85%',
        },
        [theme.breakpoints.down("xs")]: {
            width: '100%',
            padding: '30px 0',
        },
        margin: 'auto',
        padding: '30px',
    },

    title: {
        fontSize: '50px',
        [theme.breakpoints.between("sm", "lg")]: {
            fontSize: '30px',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '20px',
        },
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',
        margin: '0'
    },

    resultsNumbers: {
        color: '#fff',
        margin: 'auto',
        padding: '35px 0 10px',
        display: 'flex',
        width: '70%',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down("xs")]: {
            flexDirection: 'column',
        },
        justifyContent: 'space-between'
    },

    resultNumbersBlock: {
        borderRight: '1px solid #fff',
        [theme.breakpoints.down("xs")]: {
            borderRight: '0',
            marginRight: '0',
            padding: '10px'
        },
        flex: '1',
        textAlign: 'center',
        marginRight: '20px'
    },

    imageWrapper: {
        width: '100%'
    }
}))