export default (state, action) => {
    switch(action?.type) {
        case "SET_PRODUCTS":
            console.log('setting products');
            console.log(action?.payload);
            return {
                ...state,
                products: [...action?.payload]
            }
        case "ADD_TO_CART":
            let cartItems = state?.cart;
            console.log('add to cart');
            console.log(cartItems);
            console.log(action?.payload);
            const productIndex = cartItems?.findIndex(item => item?._id == action?.payload?._id);
            console.log(productIndex);
            if(productIndex !== -1) {
                cartItems[productIndex].quantity = parseInt(cartItems[productIndex]?.quantity) + 1;
                cartItems[productIndex].price = parseInt(cartItems[productIndex]?.quantity) * parseInt(cartItems[productIndex]?.price);
            } else {
                action.payload.quantity = 1;
                action.payload.price = 15;
                console.log(action?.payload);
                console.log(cartItems);
                cartItems = [...cartItems, {...action?.payload}]
            }
            console.log(cartItems);
            return {
                ...state,
                cart: [
                    ...cartItems
                ]
            }
        case "REMOVE_FROM_CART":
            const updatedCart = state?.cart?.filter(item => item._id !== action?.payload?._id);
            return {
                ...state,
                cart: [
                    ...updatedCart
                ]
            }
        default:
            console.log('no case match in reducer');
            console.log(action);
            console.log(state);
            return;
    }
}