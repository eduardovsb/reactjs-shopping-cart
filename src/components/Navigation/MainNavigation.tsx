import { NavLink } from 'react-router-dom';
import './MainNavigation.scss';
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { useSelector } from 'react-redux';
import { getCartCount } from '../../slices/Cart/cart.slice';

interface DrawerToggleType {
    drawerClickHandler: () => void;
}

const MainNavigation = ({ drawerClickHandler }: DrawerToggleType) => {
    const cartItemsCount = useSelector(getCartCount);

    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton click={drawerClickHandler} />
                </div>
                <div className="toolbar__logo">
                    <NavLink to="/home">Home</NavLink>
                </div>
                <div className="spacer" />
                <div className="toolbar__navigation-items">
                    <ul>
                        <li>
                            <NavLink to="/products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">
                                Cart
                                <span className="badge">{cartItemsCount}</span>
                            </NavLink>
                        </li>
                    </ul>
                    <span className="toolbar__cart-icon">
                        <NavLink to="/cart">
                            Cart
                            <span className="badge">{cartItemsCount}</span>
                        </NavLink>
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default MainNavigation;
