import { useEffect } from "react";
import { createPortal } from "react-dom";
import { HiMiniXMark } from "react-icons/hi2";


const Modal = ({ isOpen, onClose, title, children }) => {
    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md mx-4 p-6 relative animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl cursor-pointer"
                >
                    <HiMiniXMark />
                </button>
                {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
                <div>{children}</div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
