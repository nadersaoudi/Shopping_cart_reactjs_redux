import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img6 from '../images/img6.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
const Home = (props) => {
    console.log(props);
    return (
        <div className='container'>
            <div className='image'>
                <img src={img1}  height='400' width='300' alt='img1' />
                <h3>Jecket</h3>
                <h3>$15,00</h3>
                <a onClick={() =>props.addBasket('Jecket')} className='addToCart cart1' href='#' >Add to Cart</a>
            </div>
            <div className='image'>
                <img src={img2} height='400' width='300' alt='img2' />
                <h3>Jecket</h3>
                <h3>$15,00</h3>
                <a  onClick={() =>props.addBasket('Jecket1')}  className='addToCart cart2' href='#' >Add to Cart</a>
            </div>
            <div className='image'>
                <img src={img3} height='400' width='300' alt='img3' />
                <h3>Tshirt</h3>
                <h3>$15,00</h3>
                <a  onClick={() =>props.addBasket('Tshirt')} className='addToCart cart3' href='#' >Add to Cart</a>
            </div>
            <div className='image'>
                <img src={img4} height='400' width='300' alt='img4' />
                <h3>Tshirt</h3>
                <h3>$15,00</h3>
                <a   onClick={() =>props.addBasket('Tshirt1')} className='addToCart cart4' href='#' >Add to Cart</a>
            </div>
            <div className='image'>
                <img src={img6} height='400' width='300' alt='img6' />
                <h3>Shoes</h3>
                <h3>$15,00</h3>
                <a   onClick={() =>props.addBasket('Shoes')} className='addToCart cart5' href='#' >Add to Cart</a>
            </div>
        </div>
    )
}

export default connect (null ,{ addBasket })(Home);
