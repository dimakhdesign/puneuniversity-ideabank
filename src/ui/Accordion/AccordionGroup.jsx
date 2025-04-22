import { useState } from "react";
import Accordion from "./Accordion";

const AccordionGroup = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div>
            {items.map((item, index) => (
                <Accordion
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                >
                    {item.content}
                </Accordion>
            ))}
        </div>
    );
};

export default AccordionGroup;
