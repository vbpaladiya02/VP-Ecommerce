import React from 'react';
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

import useStyles from "./styles"

const products = [
    { id: 1, name: 'Shoes', description: 'shoes description', price: "2500 INR", image: "https://imgs.search.brave.com/qyJdoL5U1dmAAMOc_G7ipGokSeF8_uVWoG5LKW055QM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVEJkNXhB/SUdYVmlhTVpZM3V2/U3Q0MWxtVF9KZlBF/ekZfOXpDWl9NbFBC/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldGbi9aWE11YldW/bGMyaHZMbU52L2JT/OXBiV0ZuWlhNdmNI/SnYvWkhWamRITXZN/akUzTkRndy9OekU0/TDJkbGJYTmtYelF3/L01DNTNaV0p3" },
    { id: 1, name: 'Mackbook', description: 'Mackbook description', price: "150000 INR", image: "https://imgs.search.brave.com/VMiOjsDQ6q9iurMSaiCgS5qJYi5xWV_UmeptaXe4gR4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vWmFGdFpX/enlJZ2FmTmdacTFZ/b3BvUHkxSDNSZnMw/WjZJUkluZWJHa01w/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk9E/TXgvTlRZMk5URXdM/M0JvYjNSdi9MMkZ3/Y0d4bExXMWhZMkp2/L2Iyc3RjbVYwYVc1/aExXTnYvZG1WeUxX/OXVMV0V0WkdWei9h/eTEwWVdKc1pTMTNh/WFJvL0xXMXZkWE5s/TFdGdVpDMXovZEdG/MGFXOXVaWEo1TG1w/dy9aejl6UFRZeE1u/ZzJNVEltL2R6MHdK/bXM5TWpBbVl6MWsv/TFdKMlptc3hha0ZW/T1RBei9NM2RXVlZF/MFQxcHJTbDlML2NY/VlhZemcwYlcxeWN5/MXIvYms5MlMyWnZQ/UQ" },
    { id: 1, name: 'Samsung Mobile', description: 'Mpbile description', price: "40000 INR", image: "https://imgs.search.brave.com/Tl5PRqhRIKDLdVVf0FpT72djq2GpnvHcxR4CH8bwLCU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vbTN5X1pi/MWtrbFg1cDd5RTV1/M3pESG1wNzVKRER4/Z3dpcDUtTWgyT1VV/US9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVuWlhS/MGVXbHRZV2RsL2N5/NWpiMjB2YVdRdk1U/VTUvTnpZNE16ZzRN/aTl3YUc5MC9ieTlq/ZFhOMGIyMWxjbk10/L1pYaHdaWEpwWlc1/alpTMXovWVcxemRX/NW5jeTF1WlhjdC9a/bTlzWkdGaWJHVXRi/VzlpL2FXeGxMWEJv/YjI1bExXZGgvYkdG/NGVTMTZMV1pzYVhB/MS9MV0YwTFdFdGMy/RnRjM1Z1L1p5MXpZ/V3hsY3k1cWNHY18v/Y3owMk1USjROakV5/Sm5jOS9NQ1pyUFRJ/d0ptTTlSbG80L2Iy/UnBSR3BxVlRoSVRs/bzQvUm1sMFJrNW1N/MFpDY0dSUC9WRWRV/T1c1c01FZENjRjlQ/L2VFRlNiejA" }

]
const Products = () => {
    const classes = useStyles()
    
    return (
        <main className={classes.content}>
            <div className={classes.toolBar} />

            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Products