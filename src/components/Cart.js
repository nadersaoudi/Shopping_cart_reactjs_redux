import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img6 from '../images/img6.jpg';


function Cart({ basketProps }) {
    console.log(basketProps);
    let productsInCart = [];
    Object.keys(basketProps.products).forEach(function (item){
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if (basketProps.products[item].inCart){
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    })
    const productImage = [img1, img2, img3, img4, img6]
    productsInCart = productsInCart.map((product, index) => {
        return (
            <Fragment>
                <div className='product'><ion-icon name='close-circle'></ion-icon><img src={productImage[index]} />
                    <span className='sm-hide'>{product.name}</span>
                </div>
                <div className='price sm-hide'>${product.price},00</div>
                <div className='quantity'>
                    <ion-icon className='decrease' name='arrow-back-circle-outline'></ion-icon>
                        <span>{product.numbres}</span>
                    <ion-icon className='increase' name='arrow-forward-circle-outline'></ion-icon>
                </div>
                <div className='total'>
                    ${product.numbres * product.price},00
                </div>
            </Fragment>
        )
    })
    return (
        <div className='container-products'>
            <div className='product-header'>
                <h5 className='product-title'>PRODUCT</h5>
                <h5 className='product-sm-hide'>PRICE</h5>
                <h5 className='quantity'>QUANTITY</h5>
                <h5 className='total'>TOTAL</h5>
            </div>
            <div className='products'>
                { productsInCart } 
            </div>
            <div className='basketTotalContainer'>
                <h4 className='basketTotalTitle'>Basket total</h4>
                <h4 className='basketTotal'>{basketProps.cartCost},00</h4>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    basketProps : state.basketState,
});
export default connect(mapStateToProps) (Cart);
