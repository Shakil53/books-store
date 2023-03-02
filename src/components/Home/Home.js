import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Book from '../Book/Book';
import './Home.css';



const Home = () => {
    const books = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = book => {
        const newCart = [...cart, book];
        setCart(newCart)

    }

    const handleRemoveItem = book => {
        const remaining = cart.filter(bl => bl.id !== book.id);
        setCart(remaining)
    }

    return (
        <div className='home-container'>
            <div className='book-container'>
                {
                    books.map(book => <Book
                        key={book.id}
                        book={book}
                        handleAddToCart={handleAddToCart}
                    ></Book>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}></Cart>
            </div>

        </div>
    );
};

export default Home;