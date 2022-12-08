import { NavLink } from 'react-router-dom';
import './SideDrawer.scss';

interface SideDrawerProps {
    show: boolean;
}

const SideDrawer = ({ show }: SideDrawerProps) => {
    let drawerClasses = 'side-drawer';
    if (show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <NavLink to="home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="cart">Cart</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default SideDrawer;
