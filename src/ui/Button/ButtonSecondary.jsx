import './ButtonSecondary.css';

const ButtonSecondary = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="btn-secondary cursor-pointer transition">
            {text}
        </button>
    )
}

export default ButtonSecondary
