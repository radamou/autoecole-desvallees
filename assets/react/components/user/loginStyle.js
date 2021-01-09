import { makeStyles } from '@material-ui/core/styles';
import Image from '../ui/images/car.jpg'

export const loginStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between;'
    },

    rootPresentation: {
        backgroundImage: `url(${Image})`
    }
});