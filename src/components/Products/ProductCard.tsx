import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/store.hooks';
import { addToCart } from '../../slices/Cart/cart.slice';
import { Product, removeProduct, selectAllProducts } from '../../slices/Products/products.slice';
import './ProductCard.scss';

const ProductCard: React.FC = () => {
    // const eft = useSelector<RootState>((state) =>
    //   selectProductById(state, "eft")
    // );
    // const totalNumberOfProducts = useSelector(selectTotalProducts);
    // const productIds = useSelector(selectProductIds);
    // const entities = useSelector(selectProductEntities);

    const products = useSelector(selectAllProducts);
    const dispatch = useAppDispatch();

    const removeFromStore = (id: string) => {
        dispatch(removeProduct(id));
    };

    const addToCartHandler = (product: Product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product-card__container">
            {products.map((product) => (
                <div key={product.id} className="product__card">
                    <div className="product__card-header">
                        <span>{`${product.title}: $${product.price}`}</span>
                    </div>
                    <div className="product__card-image">
                        <img src="/" alt={product.title} />
                    </div>
                    <div className="product__card-footer">
                        <button className="btn" onClick={() => addToCartHandler(product)}>
                            Add to cart
                        </button>
                        <button className="btn" onClick={() => removeFromStore(product.id)}>
                            Remove from store
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
