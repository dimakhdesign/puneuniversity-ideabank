const ProgressBar = ({ value, max = 100, color = "bg-blue-500" }) => {
    const percent = (value / max) * 100;

    return (
        <div className="w-full bg-white rounded-full h-2 overflow-hidden mt-2">
            <div
                className={`${color} h-full rounded-full transition-all duration-300`}
                style={{ width: `${percent}%` }}
            />
        </div>
    );
};

export default ProgressBar;
