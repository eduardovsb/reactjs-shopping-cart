import './Backdrop.scss';

interface DrawerToggleType {
    click?: () => void;
}

const Backdrop = ({ click }: DrawerToggleType) => {
    return <div className="backdrop" onClick={click} />;
};

export default Backdrop;
