import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";

const initialStete = {
    basketNumber : 0,
    cartCost: 0,
    products : {
        Jacket:{
            name:"Jacket",
            price: 1500,
            number: 0,
            inCart: false
        },
        Jacket1:{
            name:'Jacket',
            price: 1500,
            number: 0,
            inCart: false
        },
        Tshirt:{
            name:'Tshirt',
            price: 700,
            number: 0,
            inCart: false
        },
        Tshirt1:{
            name:'Tshirt',
            price: 700,
            number: 0,
            inCart: false
        },
        Shoes:{
            name:'Shoes',
            price: 1200,
            number: 0,
            inCart: false
        },
    }
}
export default(state = initialStete, action) => {
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            let addQuantity = {...state.products[action.payload]}
            addQuantity.number += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
            return{
                ...state,
                basketNumber: state.basketNumber + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products:{
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
        case GET_NUMBERS_BASKET:
            return{
                ...state
            }
        default:
            return state;
    }
}