import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
        width: '83%',
        paddingLeft: '15%',
        paddingTop: '5%',
        [theme.breakpoints.between("sm", "lg")]: {
            width: '73%',
            paddingLeft: '25%',
            paddingTop: '15%',
        },
        [theme.breakpoints.down("xs")]: {
            width: '53%',
            paddingLeft: '45%',
            paddingTop: '5%',
        }
    },
    title: {
        display: 'flex',
        alignItems: 'center'
    },
    calender: {

    }
}))