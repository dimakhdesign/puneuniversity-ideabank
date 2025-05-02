import { API_KEY } from '../../../config/apiConfig';
import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import FormField from "../../auth/FormField";
import WhiteBox from "../../../ui/WhiteBox/WhiteBox";
import Button from "../../../ui/Button/Button";

import toast, { Toaster } from "react-hot-toast";

const Settings = () => {

    const { authData } = useAuth();  // Get authData from context

    const userId = authData?.userId;

    const userPass = authData?.userPass;

    const [studentInfo, setStudentInfo] = useState({});

    useEffect(() => {
        const getStudentData = async () => {

            try {
                const response = await fetch("/api/profileUser.php", {
                    // const response = await fetch('https://design3.dcpl.co.in/AyushCOE/APIs/profileUser.php', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_id: userId,
                        Authorization_key: API_KEY,
                        AccessLevel: "Student"
                    }),
                });

                if (!response.ok) throw new Error("Failed to display details.");

                const result = await response.json();
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

    // API call on submission
    const onSubmitProfile = async (formData) => {

        try {
            const res = await fetch("/api/UpdateUserprofile.php", {
                // const response = await fetch('https://design3.dcpl.co.in/AyushCOE/APIs/UpdateUserprofile.php', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: userId,
                    txt_name: formData.name,
                    txt_email: formData.email,
                    txt_college: formData.college_name,
                    dob: formData.dob,
                    txt_type: formData.student_type,
                    txt_password: formData.confirmPassword,
                    Authorization_key: API_KEY,
                    AccessLevel: "Student",
                    updated_by: userId,
                }),
            });

            if (!res.ok) throw new Error("Failed to update profile");

            const result = await res.json();
            console.log("Profile updated", result);

            // Reset only the password fields
            reset({
                oldPassword: "",
                password: "",
                confirmPassword: "",
            }, { keepValues: true });  // This ensures other fields are not reset.

            // Show success toast notification
            toast.success("Password updated successfully!");

        } catch (error) {
            console.error("Error:", error);
            toast.error("Error updating profile. Please try again.");
        }
    };

    return (
        <>
            {/* Profile Section */}
            <WhiteBox>
                <form onSubmit={handleSubmit(onSubmitProfile)}>
                    <p className="mb-3 font-bold">1. Profile Information</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 mb-5">
                        <div className="flex flex-col gap-2">
                            <label>Name</label>
                            <FormField {...register("name", { required: true })} disabled />
                            {errors.name && <span className="text-red-500">Required</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Email</label>
                            <FormField {...register("email", { required: true })} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>College</label>
                            <FormField {...register("college_name")} disabled />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>DOB</label>
                            <FormField type="date" {...register("dob")} disabled />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Type</label>
                            <FormField {...register("student_type")} disabled />
                        </div>
                    </div>

                    <p className="mb-3 font-bold">2. Security</p>

                    {/* Old Password */}
                    <div className="form-group flex flex-col gap-2 mb-5">
                        <label>Old Password</label>
                        <FormField
                            type="password"
                            {...register("oldPassword", {
                                required: "Old password is required",
                                validate: (value) =>
                                    value === userPass || "Old password does not match",
                            })}
                        />
                        {errors.oldPassword && (
                            <p className="text-red-500 text-xs">{errors.oldPassword.message}</p>
                        )}
                    </div>

                    {/* New Password */}
                    <div className="form-group flex flex-col gap-2 mb-5">
                        <label>Password</label>
                        <FormField
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Password cannot exceed 20 characters",
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
                                    message: "Password must contain at least one uppercase letter, one number, and one special character",
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="form-group flex flex-col gap-2 mb-5">
                        <label>Confirm Password</label>
                        <FormField
                            type="password"
                            {...register("confirmPassword", {
                                required: "Please confirm your Password",
                                validate: (value) =>
                                    value === watch("password") || "Passwords do not match",
                            })}
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-xs">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    <Button text="Update Details" type="submit" className="!w-max" />
                </form>
            </WhiteBox>

            <Toaster />
        </>
    );
};

export default Settings;
