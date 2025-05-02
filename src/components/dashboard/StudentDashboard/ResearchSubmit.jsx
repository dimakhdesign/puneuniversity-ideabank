import { API_KEY } from '../../../config/apiConfig';
import { useAuth } from '../../../context/AuthContext';
import { useState } from 'react';
import { useForm } from "react-hook-form";

import FormField from '../../auth/FormField';
import Button from '../../../ui/Button/Button';
import WhiteBox from '../../../ui/WhiteBox/WhiteBox';


import toast, { Toaster } from "react-hot-toast";

const ResearchSubmit = () => {

    const [isResearchSubmitted, setIsResearchSubmitted] = useState(false);

    const { authData } = useAuth();
    const studentId = authData?.userId;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {

        const submitResearch = async () => {
            try {
                const response = await fetch('/api/submitResearch.php', {
                    // const response = await fetch('https://design3.dcpl.co.in/AyushCOE/APIs/submitResearch.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Authorization_key: API_KEY,
                        student_id: studentId,
                        txt_title: formData.researchTitle,
                        txt_research_idea: formData.researchDescription
                    }),
                })

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log(result);

                if (result.msg === "research idea already submited") {
                    setIsResearchSubmitted(true);
                }

                reset();

                // Show success toast notification
                toast.success("Research submitted!");

            } catch (error) {
                console.error('Get User error:', error);
            }
        };
        submitResearch();
    }

    return (
        <>
            <p>Please submit your research here</p>

            <WhiteBox className='mt-5'>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group flex-col mb-3">
                        <FormField
                            element="input"
                            placeholder="Enter research title..."
                            {...register("researchTitle", {
                                required: "Please enter the title",
                            })}
                            aria-invalid={errors.researchTitle ? "true" : "false"}
                        />
                        {errors.researchTitle?.type === "required" && (
                            <p className="text-red-600 text-xs">Please enter the title</p>
                        )}
                    </div>
                    <div className="form-group flex-col">
                        <FormField
                            element="textarea"
                            placeholder="Enter your research ideas..."
                            className="h-32 mt-0"
                            {...register("researchDescription", {
                                required: "Please enter your research",
                            })}
                            aria-invalid={errors.researchDescription ? "true" : "false"}
                        />
                        {errors.researchDescription?.type === "required" && (
                            <p className="text-red-600 text-xs">Please enter your research</p>
                        )}
                    </div>
                    <div className="form-group mt-3">
                        <Button text="Submit" type="submit" className='!w-auto' />
                    </div>
                </form>
            </WhiteBox>

            <Toaster />
        </>
    )
}

export default ResearchSubmit
