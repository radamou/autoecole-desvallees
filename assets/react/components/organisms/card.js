import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from "assets/images/applications.jpg";

const useStyles = makeStyles({
    root: {
        margin: 20
    },
    media: {
        height: 140,
    },

    link: {
        textDecoration: 'none',
    }
});

export default function MediaCard() {
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
                    <Typography gutterBottom variant="h4" component="h2">
                        Code de la route
                    </Typography>
                    <Typography gutterBottom variant="h4" component="h2">
                       A partir de 350
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Frais administratifs
                        Code en salle (1 an)
                        Accès code en ligne (6 mois)
                        Présentation examen du code
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a href='/boutique' className={classes.link}>
                    <Button size="small" color="primary">
                        Découvrir nos offres
                    </Button>
                </a>
            </CardActions>
        </Card>
    );
}