import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/store.hooks';
import { addProductAsync, getErrorMessage, Product } from '../../slices/Products/products.slice';
import '../../components/Products/ProductForm.scss';

interface ProductFormProps {
    onClose: () => void;
}

const ProductForm = ({ onClose }: ProductFormProps) => {
    const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const priceRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const idRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const dispatch = useAppDispatch();
    const errorMessage = useSelector(getErrorMessage);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const submitData: Product = {
            title: titleRef.current.value,
            price: +priceRef.current.value,
            id: idRef.current.value
        };
        dispatch(addProductAsync(submitData));
        if (!errorMessage) {
            // todo_fix: bug se houver erro na primeira submissão, retornará undefined
            onClose();
        }
    };

    return (
        <>
            {errorMessage && <span style={{ color: 'red' }}>Error: {errorMessage}</span>}
            <form onSubmit={handleSubmit}>
                <section>
                    <div className="form-control">
                        <label htmlFor="title">Game Title</label>
                        <input style={{ border: errorMessage ? '1px solid red' : '1px solid black' }} type="text" placeholder="Game Title" name="title" ref={titleRef} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="price">Price</label>
                        <input style={{ border: errorMessage ? '1px solid red' : '1px solid black' }} type="number" placeholder="Price" name="price" ref={priceRef} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="id">Id</label>
                        <input style={{ border: errorMessage ? '1px solid red' : '1px solid black' }} type="text" placeholder="Id" name="id" ref={idRef} />
                    </div>
                </section>
                <section className="product-form__actions">
                    <button className="btn" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="btn" type="submit">
                        Add product
                    </button>
                </section>
            </form>
        </>
    );
};

export default ProductForm;
