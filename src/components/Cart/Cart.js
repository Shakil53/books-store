import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Order Quantity: {cart.length}</p>
            {
                cart.map(book => <p
                    key={book.id}
                >{book.name}
                    <button onClick={() => handleRemoveItem(book)}
                        className='btn'>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;