import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from "assets/images/moniteur-auto-ecole.png";

const useStyles = makeStyles({
    root: {
        margin: 20,
        width: '28%'
    },
    media: {
        height: 300,
    },

    link: {
        textDecoration: 'none',
    },
    nameContainer: {
        paddingTop: 20
    },

    name: {
        fontSize: 15,
        fontWeight: 700,
        color: '#d3215f',
    }
});

export default function MonitorCard() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                       Mon métier, c'est à la foi une énorme responsabilité et beaucoup de beaux moments.
                       Il faut toujours se remettre en question pour aider les élèves et assurer leur sécurité.
                    </Typography>

                    <Typography component="p" className={classes.nameContainer}>
                        <span className={classes.name}>Alex</span> - Moniteur
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}