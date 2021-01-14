import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles({
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
        paddingTop: 50
    },

    monitorList: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        margin: 'auto'
    }
})