import PropTypes from "prop-types";
import './InfoWithIcon.css';

const InfoWithIcon = ({ icon, title, subtitle, alt = "" }) => {
    return (
        <div className="InfoWithIcon flex items-start gap-3">
            <div className="icon shrink-0">
                <img src={icon} alt={alt} className="w-10 h-10 object-contain" />
            </div>
            <div className="text flex flex-col">
                <h4 className="text-base font-medium text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
        </div>
    );
};

InfoWithIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

export default InfoWithIcon;
