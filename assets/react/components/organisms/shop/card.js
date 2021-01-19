import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { formulas } from "assets/data/formulas";
import { fr } from "assets/translation/fr";
import { SHOP_LINK } from "assets/routing";
import { useStyles } from "assets/react/components/style/organisms/shop/card"

export default function ShopCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        { formulas.one.title }
                    </Typography>
                    <Typography gutterBottom variant="h4" component="h2">
                        { fr.formulas.price } { formulas.one.price }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { formulas.one.description }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a href={ SHOP_LINK } className={classes.link}>
                    <Button size="small" color="primary">
                        Payer
                    </Button>
                </a>
            </CardActions>
        </Card>
    );
}