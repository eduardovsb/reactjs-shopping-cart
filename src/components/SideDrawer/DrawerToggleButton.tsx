import './DrawerToggleButton.scss';

interface DrawerToggleType {
    click: () => void;
}

const DrawerToggleButton = ({ click }: DrawerToggleType) => {
    return (
        <button className="toggle-button" onClick={click}>
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
        </button>
    );
};

export default DrawerToggleButton;
