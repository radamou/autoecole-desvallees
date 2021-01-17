import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        width: '70%',
        justifyContent: 'space-between',
        padding: 50,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.between("sm", "lg")]: {
            width: '85%',
        },
        [theme.breakpoints.down("xs")]: {
            width: '100%',
            flexDirection: 'column',
            padding: 0,
        },
    },
}))