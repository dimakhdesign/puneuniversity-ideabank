import PropTypes from "prop-types";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";

const AssignmentListItem = ({ title, date, status }) => {

    const isMissed = status.toLowerCase() === "missed";

    const statusColor = isMissed ? "text-orange-600" : "text-green-500";
    const iconBgColor = isMissed ? "bg-orange-100" : "bg-green-100";
    const iconColor = isMissed ? "text-orange-600" : "text-green-500";

    const Icon = isMissed ? HiChevronDown : HiChevronUp;

    return (
        <div className="flex justify-between items-center py-4 border-b border-stone-300 last:border-b-0">
            <div className="flex flex-col">
                <h4 className="text-sm font-medium text-gray-800">{title}</h4>
                <p className={`text-xs ${statusColor}`}>{status === 'Missed' ? 'Missed Submission' : status}</p>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-sm font-medium">{date}</span>
                <span className={`${iconBgColor} rounded-md p-1`}>
                    <Icon className={`w-3 h-3 font-bold ${iconColor}`} strokeWidth="2" />
                </span>
            </div>
        </div>
    );
};

AssignmentListItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};

export default AssignmentListItem;
