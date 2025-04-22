import './WhiteBox.css';

const WhiteBox = ({ children, className = "" }) => {
    const baseClasses =
        "w-full p-4 bg-white rounded-md";
    return (
        <div className={`${baseClasses} ${className}`}>
            {children}
        </div>
    )
}

export default WhiteBox
