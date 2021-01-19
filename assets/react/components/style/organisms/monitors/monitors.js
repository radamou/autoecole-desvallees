import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme =>({
    monitors: {
        width: '100%',
        marginTop: 50,
        backgroundColor: '#F1F1F1'
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 600,
        color: '#d3215f',
        paddingTop: 50,
        [theme.breakpoints.down("xs")]: {
            fontSize: 20,
        }
    },

    monitorList: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        margin: 'auto',
        [theme.breakpoints.between("sm", "lg")]: {
            width: '90%',
        },
        [theme.breakpoints.down("xs")]: {
            width: '100%',
            flexDirection: 'column'
        },
    }
}))