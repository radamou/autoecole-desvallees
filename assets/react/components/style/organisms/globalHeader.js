import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles({
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
        flexDirection: 'row'
    },
    
    menu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '15%',
        alignItems: 'center',
        paddingRight: '3%',
        listStyle: 'none'
    },

    separator: {
        width: '1px',
        height: '32px',
        backgroundColor: '#E9ECEF'
    }
})