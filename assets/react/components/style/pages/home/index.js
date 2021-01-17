import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
  root: {
    width: '100%',
  },

  header: {
    position: "sticky",
    height: '80px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #dadada'
  },

  headerMenuContainer: {
    margin: 'auto',
    width: '50%',
    [theme.breakpoints.between("sm", "lg")]: {
      width: '70%',
    },
    [theme.breakpoints.down("xs")]: {
      width: '100%',
    },
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerCourseShopContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginRight: '20px',
    fontWeight: '700',
  },

  headerUser: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
  },

  logoHeader: {
    width: '175px',
  },

  logoImage: {
    maxWidth: '100%',
  },

  userInscriptionTitle: {
    lineHeight: '1.83',
    textAlign: 'center',
    fontWeight: 700,
    fontStretch: 'normal',
    fontStyle: 'normal'
  },

  userLink: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: '700'
  },

  userFormSubmitButton: {
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

  container: {
    height: '400px',
    display: 'block',
    backgroundColor: '#2f3a4f',
    width: '100%',
    top: '0',
    overflow: 'hidden',
    margin: 'auto',
    padding: 'auto'
  }
}))