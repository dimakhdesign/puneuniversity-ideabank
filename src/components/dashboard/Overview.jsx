import { API_KEY } from '../../config/apiConfig';
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from '../../context/UserContext';

import WhiteBox from "../../ui/WhiteBox";
import UserImage from '../../assets/user-profile-image.svg';
import ButtonSecondary from "../../ui/Button/ButtonSecondary";
import AccordionGroup from "../../ui/Accordion/AccordionGroup";
import Link from "../../ui/Link/Link";

import SidebarRight from "./SidebarRight";
import PurpleCard from '../../ui/Cards/PurpleCard';
import BlueCard from '../../ui/Cards/BlueCard';

import Modal from '../../ui/Modal/Modal';
import Button from '../../ui/Button/Button';
import FormField from '../auth/FormField';

import './Overview.css';
import { useNavigate } from 'react-router-dom';

const faqItems = [
    {
        title: "Can you tell me how to ask questions on this platform?",
        content: "To ask questions on this platform, simply type your query in the designated input area and hit 'Enter' or click the 'Submit' button. Make sure your question is clear and concise for the best responses!",
    },
    {
        title: "Can you tell me how to ask questions on this platform?",
        content: "To ask questions on this platform, simply type your query in the designated input area and hit 'Enter' or click the 'Submit' button. Make sure your question is clear and concise for the best responses!",
    },
    {
        title: "Can you tell me how to ask questions on this platform?",
        content: "To ask questions on this platform, simply type your query in the designated input area and hit 'Enter' or click the 'Submit' button. Make sure your question is clear and concise for the best responses!",
    },
];

const Overview = () => {

    const [showModal, setShowModal] = useState(false);

    const [studentData, setStudentData] = useState(null);

    const { currentUser } = useContext(UserContext); // Access user data from context

    // Store current student id in studentId
    const studentId = currentUser.id;

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {
        console.log(formData);
    }

    useEffect(() => {
        if (!studentId) return;

        const getStudentData = async () => {
            try {
                const response = await fetch('/api/profileStudent.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Authorization_key: API_KEY,
                        student_id: studentId,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();

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
                    setError(result.msg || 'Failed to fetch student data');
                }
            } catch (error) {
                console.error('Get User error:', error);
                setError(error.message);
            }
        };

        getStudentData();
    }, []);

    const handleUpdateProfile = () => {
        navigate('/dashboard-student/settings')
    }

    const handleViewAllClick = () => {
        navigate('/dashboard-student/resources')
    }

    const handleUploadDoc = () => {
        console.log("Please upload the document!")
    }

    return (
        <div className="grid grid-cols-[65%_35%] gap-4">
            <div className='ml-2 h-screen'>

                <WhiteBox className='profile-box flex gap-3'>
                    {/* <div className="user-image">
                        <img src={UserImage} alt="User" />
                    </div> */}
                    <div className="profile-summary">
                        {studentData && (
                            <p>
                                Welcome to our platform,<br />
                                <strong>{`${studentData.name} !`}</strong> Here’s a quick overview of what you can expect.
                            </p>
                        )}
                        <div className='profile-cpmpletion-status flex gap-3 items-center mt-3'>
                            <p>Your profile is 50% completed.</p>
                            <ButtonSecondary text="Update Now!" onClick={handleUpdateProfile} />
                        </div>
                    </div>
                </WhiteBox>

                <div className="cards-wrapper flex gap-4 mt-5">
                    {/* Purple Card */}
                    <PurpleCard />

                    {/* Blue Card */}
                    <BlueCard />
                </div>

                <WhiteBox className='bg-white question-answer-box mt-5'>
                    <div className="accordion-header flex justify-between">
                        <h2 className="section-heading">Q&A Discussions</h2>
                        <ButtonSecondary text="Ask new Question" onClick={() => setShowModal(true)} />
                    </div>
                    <div className="accordion-wrapper border-t-1 border-gray-200 mt-4">
                        {/* <AccordionGroup items={faqItems} />
                        <Link text="View All" className="mt-3" onClick={handleViewAllClick} /> */}
                        <p className='mt-5'>Q&A discussions will appear here once they begin.</p>
                    </div>
                </WhiteBox>

                <WhiteBox className='bg-white recent-resources-box mt-5'>
                    <h2 className="section-heading">Recent Resources & Guidelines</h2>
                    <p className="my-4">Explore our latest resources and guidelines to enhance your experience. Stay informed with up-to-date information and best practices!</p>
                    <ButtonSecondary text="View all" onClick={handleViewAllClick} />
                </WhiteBox>

            </div>

            {/* Modal */}
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Ask New Question"
            >
                <form action="" onSubmit={handleSubmit(onSubmit)}>
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
    )
}

export default Overview
