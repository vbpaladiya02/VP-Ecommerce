import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core"
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
const Product = ({ product }) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography varrient='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography varrient='h5'>
                        {product.price}
                    </Typography>
                </div>
                    <Typography variant='body2' color='textSecondary'>{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default Product