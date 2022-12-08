import Backdrop from '../Backdrop/Backdrop';
import './Modal.scss';

interface ModalProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    onCancel?: () => void;
    onConfirm?: () => void;
}

const Modal = ({ title, children, onCancel, onConfirm, isOpen, onClose }: ModalProps) => {
    return isOpen ? (
        <>
            <Backdrop click={onClose} />
            <div className="modal fade-in">
                <header className="modal__header">
                    <h1>{title}</h1>
                    <span className="fade-out" onClick={onClose}>
                        <h1>X</h1>
                    </span>
                </header>
                <section className="modal__content">{children}</section>
                {/* <section className="modal__actions">
                <button className="btn" onClick={onCancel}>
                    Cancel
                </button>
                <button className="btn" onClick={onConfirm}>
                    Confirm
                </button>
            </section> */}
            </div>
        </>
    ) : null;
};

export default Modal;
