import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles({
    root: {
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '10%',
        padding: '2rem  .9rem .9rem',
        boxShadow: '0 2px 24px 0 rgba(0,24,31,.04), 0 4px 8px 0 rgba(0,42,54,.02)',
        position: 'fixed',
        overflow: 'auto',
        height: '100vh'
    },
    logoContainer: {
        width: '90%',
        maxHeight: '50px',
    },
    LogoImg: {
        maxWidth: '100%'
    }
})