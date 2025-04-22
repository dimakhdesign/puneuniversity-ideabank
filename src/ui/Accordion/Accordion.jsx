
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";

const Accordion = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className="w-full border-b-1 border-gray-200">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center py-4 text-left text-sm font-medium text-gray-800 transition cursor-pointer"
            >
                <span>{title}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <HiChevronDown className="w-5 h-5" />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { height: "auto", opacity: 1 },
                            collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pt-3 pb-5 text-sm text-gray-700">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
