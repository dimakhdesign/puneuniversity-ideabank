import { API_KEY } from '../../../config/apiConfig';
import { useAuth } from '../../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import WhiteBox from "../../../ui/WhiteBox/WhiteBox";
import ButtonSecondary from "../../../ui/Button/ButtonSecondary";
import AccordionGroup from "../../../ui/Accordion/AccordionGroup";
import Link from "../../../ui/Link/Link";
import SidebarRight from "../../../ui/SidebarRight/SidebarRight";
import CardPurple from '../../../ui/Cards/CardPurple';
import CardBlue from '../../../ui/Cards/CardBlue';
import Modal from '../../../ui/Modal/Modal';
import Button from '../../../ui/Button/Button';
import FormField from '../../auth/FormField';
import './Overview.css';

const faqItems = [
    // {
    //     title: "Can you tell me how to ask questions on this platform?",
    //     content: "To ask questions on this platform, simply type your query in the designated input area and hit 'Enter' or click the 'Submit' button. Make sure your question is clear and concise for the best responses!",
    // },
    // {
    //     title: "Can you tell me how to ask questions on this platform?",
    //     content: "To ask questions on this platform, simply type your query in the designated input area and hit 'Enter' or click the 'Submit' button. Make sure your question is clear and concise for the best responses!",
    // },
];

const Overview = () => {
    const [showModal, setShowModal] = useState(false);
    const [studentData, setStudentData] = useState(null);

    const { authData } = useAuth();
    const userId = authData?.userId;

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // API call to fetch student data based on the student ID
    useEffect(() => {
        if (!userId) return;

        const getStudentData = async () => {
            try {
                const response = await fetch('/api/profileUser.php', {
                    // const response = await fetch('https://design3.dcpl.co.in/AyushCOE/APIs/profileUser.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Authorization_key: API_KEY,
                        user_id: userId,
                        AccessLevel: "Student"
                    }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                // console.log(result);

                // Check if the response contains the 'field_array'
                if (result.Response && result.field_array) {
                    // Destructure data from the 'field_array'
                    const {
                        id,
                        name,
                        email,
                        college_name,
                        dob,
                        student_type,
                    } = result.field_array;

                    // Update the state with student data
                    setStudentData({
                        id,
                        name,
                        email,
                        college_name,
                        dob,
                        student_type,
                    });
                } else {
                    console.error(result.msg || 'Failed to fetch student data');
                }
            } catch (error) {
                console.error('Get User error:', error);
            }
        };

        getStudentData();
    }, [userId]);  // Re-run the effect when studentId changes


    // API call to submit the question to the Admin
    const onSubmit = async (formData) => {
        const postQuestion = async () => {
            try {
                const response = await fetch('/api/submitQ&A.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Authorization_key: API_KEY,
                        student_id: studentId,
                        txt_content: formData.studentQuestion,
                        type: "question"
                    }),
                })

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                // console.log(result);

            } catch (error) {
                console.error('Get User error:', error);
            }
        };
        postQuestion();
        reset();
        setShowModal(false);
    }

    const handleViewAllClick = () => {
        navigate('/dashboard-student/discussion-forum');
    };

    return (
        <div className="grid grid-cols-[65%_35%] gap-4">
            <div className='ml-2 h-screen'>
                <WhiteBox className='profile-box flex gap-3'>
                    <div className="profile-summary">
                        {studentData ? (
                            <p>
                                Welcome to our platform,<br />
                                <span>{`${studentData.name} !`}</span> Here’s a quick overview of what you can expect.
                            </p>
                        ) : (
                            "Loading..."
                        )}

                    </div>
                </WhiteBox>

                <div className="cards-wrapper flex gap-4 mt-5">
                    <CardPurple />
                    <CardBlue />
                </div>

                <WhiteBox className='bg-white question-answer-box mt-5'>
                    <div className="accordion-header flex justify-between">
                        <h2 className="section-heading">Q&A Discussions</h2>
                        <ButtonSecondary text="Ask new Question" onClick={() => setShowModal(true)} />
                    </div>
                    {faqItems.length >= 1 ? (
                        <div className="accordion-wrapper border-t-1 border-gray-200 mt-4">
                            <AccordionGroup items={faqItems} />
                            <Link text="View All" className="mt-3" onClick={handleViewAllClick} />
                        </div>) : <p className='mt-5'>Q&A discussions will appear here once they begin.</p>
                    }

                </WhiteBox>
            </div>

            {/* Modal */}
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Ask New Question"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group flex-col">
                        <FormField
                            element="input"
                            placeholder="Enter the question..."
                            className="mt-3"
                            {...register("studentQuestion", {
                                required: "This field is required.",
                            })}
                            aria-invalid={errors.studentQuestion ? "true" : "false"}
                        />
                        {errors.studentQuestion?.type === "required" && (
                            <p className="text-red-600 text-xs">This field is required.</p>
                        )}
                    </div>
                    <div className="form-group mt-3">
                        <Button text="Submit" type="submit" />
                    </div>
                </form>
            </Modal>

            <aside className='mr-5 h-screen'>
                <SidebarRight />
            </aside>
        </div>
    );
};

export default Overview;
