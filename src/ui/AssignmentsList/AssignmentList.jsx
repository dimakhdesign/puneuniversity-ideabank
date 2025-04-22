import AssignmentListItem from "./AssignmentListItem";

const assignments = [
    {
        id: 1,
        title: "Assignment No. 1",
        date: "02 / 03 / 25",
        status: "Submitted",
    },
    {
        id: 2,
        title: "Assignment No. 2",
        date: "15 / 03 / 25",
        status: "Missed",
    },
    {
        id: 3,
        title: "Assignment No. 3",
        date: "22 / 03 / 25",
        status: "Submitted",
    },
    {
        id: 4,
        title: "Assignment No. 4",
        date: "15 / 05 / 25",
        status: "Missed",
    },
    {
        id: 5,
        title: "Assignment No. 5",
        date: "30 / 05 / 25",
        status: "Missed",
    },
];

const AssignmentList = () => {
    return (
        <div className="divide-y">
            {assignments.map((item) => (
                <AssignmentListItem
                    key={item.id}
                    title={item.title}
                    date={item.date}
                    status={item.status}
                />
            ))}
        </div>
    );
};

export default AssignmentList;
