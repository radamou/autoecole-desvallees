import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles({
    root: {
        width: '50%',
        margin: 'auto',
        padding: '30px',
    },

    title: {
        fontSize: '50px',
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
        justifyContent: 'space-between'
    },

    resultNumbersBlock: {
        borderRight: '1px solid #fff',
        flex: '1',
        textAlign: 'center',
        marginRight: '20px'
    },

    imageWrapper: {
        width: '100%'
    }
})