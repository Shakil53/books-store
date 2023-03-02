
import './Book.css';

const Book = ({ book, handleAddToCart }) => {

    const { image, price, name } = book;
    return (
        <div className='book'>
            <img alt='books' src={image}></img>
            <h3 className='text'>{name}</h3>
            <h5 className='text'>Price: ${price}</h5>
            <button onClick={() => handleAddToCart(book)}>Add To Cart</button>

        </div >
    );
};

export default Book;