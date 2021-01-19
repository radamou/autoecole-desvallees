import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from "assets/images/moniteur-auto-ecole.png";
import { monitors } from "assets/data/monitors";
import { useStyles } from "assets/react/components/style/organisms/monitors/monitorCard"


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
                        {monitors.one.description}
                    </Typography>

                    <Typography component="p" className={classes.nameContainer}>
                        <span className={classes.name}>{monitors.one.name}</span> - {monitors.one.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}