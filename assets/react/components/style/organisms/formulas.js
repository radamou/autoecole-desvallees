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
        [theme.breakpoints.down("md")]: {
            width: '85%',
            padding: 20
        },
        [theme.breakpoints.down("sm")]: {
            width: '95%',
            padding: 0
        },
        [theme.breakpoints.down("xs")]: {
            width: '100%',
            flexDirection: 'column',
            padding: 0,
        },
    },
}))