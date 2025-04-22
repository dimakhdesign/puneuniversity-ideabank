import './Link.css';

const Link = ({ text, onClick, className }) => {

    const baseClasses = 'link cursor-pointer flex items-center transition hover:color-[red]';

    return (
        <div className={`${baseClasses} ${className}`} onClick={onClick}>{text} <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M10.91 6L9.5 7.41L14.08 12L9.5 16.59L10.91 18L16.91 12L10.91 6Z" fill="#2196F3" />
        </svg></div>
    )
}

export default Link
