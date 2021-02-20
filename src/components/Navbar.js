import React ,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumber } from '../actions/getAction';
import { Link } from 'react-router-dom';
function Navbar  (props)  {
    /**********************/
    useEffect(() => {
        getNumber();
    }, []);
     /**********************/
return (
    <header>
        <div className='overlay'></div>
        <nav>
            <h2>Shop</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='#'>About</Link></li>
                <li className='cart'>
                    <Link to='/cart'>
                        <ion-icon name="basket-outline"></ion-icon>Cart<span>{props.basketProps.basketNumber}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>  
)
}
const  mapStateTopProps = state => ({
    basketProps: state.basketState
})
export default connect (mapStateTopProps,  { getNumber })(Navbar); 
