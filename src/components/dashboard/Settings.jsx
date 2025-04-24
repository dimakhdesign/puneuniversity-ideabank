import { API_KEY } from '../../config/apiConfig';
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";

import FormField from "../auth/FormField";
import WhiteBox from "../../ui/WhiteBox";
import Button from "../../ui/Button/Button";

const Settings = () => {
    const { currentUser } = useContext(UserContext);

    const [studentInfo, setStudentInfo] = useState({});

    useEffect(() => {
        const getStudentData = async () => {

            try {
                const res = await fetch("/api/profileStudent.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        student_id: currentUser.id,
                        Authorization_key: API_KEY,
                    }),
                });

                if (!res.ok) throw new Error("Failed to display details.");

                const result = await res.json();
                // console.log("Details fetched", result);
                setStudentInfo(result.field_array)

                // reset the form with the fetched data
                reset({
                    name: result.field_array.name || "",
                    email: result.field_array.email || "",
                    college_name: result.field_array.college_name || "",
                    dob: result.field_array.dob || "",
                    student_type: result.field_array.student_type || "",
                    password: "",
                });

            } catch (error) {
                console.error("Error:", error);
            }
        }
        getStudentData();
    }, [])

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: studentInfo.name,
            email: studentInfo.email,
            college_name: studentInfo.college_name,
            dob: studentInfo.dob,
            student_type: studentInfo.student_type
        },
    });

    const onSubmitProfile = async (formData) => {

        try {
            const res = await fetch("/api/UpdateStudentprofile.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    student_id: currentUser.id,
                    txt_name: formData.name,
                    txt_email: formData.email,
                    txt_college: formData.college_name,
                    dob: formData.dob,
                    txt_type: formData.student_type,
                    Authorization_key: API_KEY,
                }),
            });

            if (!res.ok) throw new Error("Failed to update profile");

            const result = await res.json();
            console.log("Profile updated", result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // const onSubmitPassword = async (formData) => {
    //     try {
    //         const res = await fetch("/api/UpdateStudentprofile.php", {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 student_id: currentUser.id,
    //                 pass: formData.password,
    //                 Authorization_key: API_KEY,
    //             }),
    //         });

    //         if (!res.ok) throw new Error("Failed to update password");

    //         const result = await res.json();
    //         console.log("Password updated", result);

    //         reset({ password: "", confirmPassword: "" }); // Clear password fields
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };

    return (
        <>
            {/* Profile Section */}
            <WhiteBox>
                <form onSubmit={handleSubmit(onSubmitProfile)}>
                    <p className="mb-3 font-medium">1. Profile Information</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <div className="flex flex-col gap-2">
                            <label>Name</label>
                            <FormField {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500">Required</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Email</label>
                            <FormField {...register("email", { required: true })} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>College</label>
                            <FormField {...register("college_name")} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>DOB</label>
                            <FormField type="date" {...register("dob")} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Type</label>
                            <FormField {...register("student_type")} />
                        </div>
                    </div>
                    <Button text="Update Details" type="submit" className="!w-max" />
                </form>
            </WhiteBox>

            {/* Password Section */}
            {/* <WhiteBox className="mt-5">
                <form onSubmit={handleSubmit(onSubmitPassword)}>
                    <p className="mb-3 font-medium">2. Security</p>
                    <div className="flex flex-col gap-2 mb-5">
                        <label>Password</label>
                        <FormField
                            type="password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <span className="text-red-500">Password is required</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-2 mb-5">
                        <label>Confirm Password</label>
                        <FormField
                            type="password"
                            {...register("confirmPassword", {
                                required: true,
                                validate: (value) =>
                                    value === watch("password") || "Passwords do not match",
                            })}
                        />
                        {errors.confirmPassword && (
                            <span className="text-red-500">
                                {errors.confirmPassword.message}
                            </span>
                        )}
                    </div>
                    <Button text="Change Password" type="submit" className="!w-max" />
                </form>
            </WhiteBox> */}

        </>
    );
};

export default Settings;
