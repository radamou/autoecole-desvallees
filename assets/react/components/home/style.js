import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles({
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
    marginRight: '20px'
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
    fontSize: '12px',
    lineHeight: '1.83',
    textAlign: 'center',
    fontWeight: 400,
    fontStretch: 'normal',
    fontStyle: 'normal'
  },
  userLink: {
    textDecoration: 'underline',
    color: '#000',
    marginLeft: '20px',
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
    position: 'absolute',
    display: 'block',
    backgroundColor: '#2f3a4f',
    width: '100%',
    top: '0',
    overflow: 'hidden',
    margin: 'auto',
    padding: 'auto'
  }
})