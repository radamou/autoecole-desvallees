import { makeStyles } from '@material-ui/core/styles';

export const formStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        height: '100vh'
    },
    rootPresentation: {
        display: 'unset'
    },
    rootPresentationImage: {
        height: '100%',
        width: '100%',
        objectFit: 'cover'
    },
    form: {
        height: '100%',
        overflowY: 'auto'
    },
    formContainer: {
        maxWidth: '50%',
        padding: '25px',
        margin: 'auto'
    },
    formLogoContainer: {
        textAlign: 'left',
        marginBottom: '8px',
        marginTop: '75px',
        width: '50%',
        margin: 'auto'
    },
    formLogoImage: {
        maxWidth: '100%'
    },
    formTitle : {
        fontSize: '34px',
        lineHeight: '.94',
        marginBottom: '7px'
    },
    formDescription: {
        fontSize: '15px',
        lineHeight: '1.47',
        marginBottom: '20px'
    },
    formField: {
        marginBottom: '20px',
        display: 'block'
    },
    formControl: {
        height: '3.125rem',
        border: '1px solid #dcdcdc',
        display: 'block',
        borderRadius: '.3rem',
        padding: '.1rem .75rem',
        lineHeight: '1.5',
        fontSize: '1rem',
        width: '95%'
    },
    controlLabel: {
        display: 'inline-block',
        marginBottom: '.5rem',
        fontWeight: 500,
        fontSize: '.81rem'
    },
    group: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex'
    },
    formGroup: {
        marginBottom: '48px',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex'
    },

    inscriptionTitle: {
        fontSize: '12px',
        lineHeight: '1.83',
        textAlign: 'center',
        fontWeight: 400,
        fontStretch: 'normal',
        fontStyle: 'normal'
    },
    link: {
        textDecoration: 'underline',
        color: '#000',
        marginLeft: '20px',
        fontWeight: '700'
    },
    formSubmitButton: {
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#d3215f',
        minWidth: '38%',
        minHeight: '45px',
        padding: '0 15px',
        textAlign: 'center',
        fontSize: '15px',
        fontWeight: '700',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal'
    },
    separator : {
        height: '1px',
        backgroundColor: '#dcdcdc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '40px 0'
    },

    separatorText: {
        width: '127px',
        fontSize: '12px',
        backgroundColor: '#fff',
        textAlign: 'center'
    },

    SocialMediaLogin: {
        display: 'flex',
        margin: '30px 0',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    socialMediaButton: {
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid #DCDCDC',
        borderRadius: '15px',
        borderBottomLeftRadius: '0',
        backgroundColor: "#fff"
    },
    socialMediaText: {
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: '8px',
        marginRight: '12px',
        justifyContent: 'center'
    },
    connexionImg: {
        width: '32px',
        height: '32px'
    }
})