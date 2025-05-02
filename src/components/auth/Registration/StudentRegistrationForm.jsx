import { API_KEY } from '../../../config/apiConfig';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormField from "../FormField";
import Button from "../../../ui/Button/Button";

import toast, { Toaster } from "react-hot-toast";

import {
  HiOutlineUserCircle,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineBuildingLibrary,
  HiOutlineEnvelope,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

import "../Form.css";

const StudentRegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // API call for form submission
  const onSubmit = async (formData) => {
    setLoading(true);

    const payload = {
      txt_name: formData.name,
      txt_email: formData.email,
      txt_college: formData.collegename,
      dob: formData.dob,
      txt_type: formData.role,
      txt_password: formData.password,
      Authorization_key: API_KEY,
      AccessLevel: "Student"
    };

    try {
      // const response = await fetch('/api/registerUser.php', {
      const response = await fetch('https://design3.dcpl.co.in/AyushCOE/APIs/registerUser.php', {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log('API Response:', result);

      if (result.Response === true) {
        toast.success("Registration completed successfully.", {
          position: "top-center",
        });

        reset();
        navigate("/login");

      } else {
        toast.error(result.message || "Something went wrong.", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error("Network error. Please try again.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group flex-col">
        <div className="relative">
          <FormField
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Please enter Name",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name must contain only letters",
              },
            })}
            aria-invalid={errors.name ? "true" : "false"}
            className="border p-2"
          />
        </div>
        {errors.name && <p className="text-red-600 text-xs">{errors.name.message}</p>}
      </div>

      <div className="form-group flex-col">
        <div>
          <FormField
            type="text"
            placeholder="College Name"
            {...register("collegename", {
              required: "Please enter College Name",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "College name must contain only letters",
              },
            })}
            aria-invalid={errors.collegename ? "true" : "false"}
          />
        </div>
        {errors.collegename && <p className="text-red-600 text-xs">{errors.collegename.message}</p>}
      </div>

      <div className="form-group flex-col">
        <div className="relative">
          <FormField
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", {
              required: "Please enter Password",
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
            aria-invalid={errors.password ? "true" : "false"}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-2 text-gray-600"
          >
            {showPassword ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
          </button>
        </div>
        {errors.password && <p className="text-red-600 text-xs">{errors.password.message}</p>}
      </div>

      <div className="form-group flex-col">
        <div>
          <FormField
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Please enter Email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid Email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
        </div>
        {errors.email && <p className="text-red-600 text-xs">{errors.email.message}</p>}
      </div>

      <div className="form-group flex-col">
        <div>
          <FormField
            type="date"
            placeholder="DOB"
            {...register("dob", { required: true })}
            aria-invalid={errors.dob ? "true" : "false"}
          />
        </div>
        {errors.dob?.type === "required" && <p className="text-red-600 text-xs">Please enter DOB</p>}
      </div>

      <div className="form-group flex-col">
        <div>
          <FormField
            element="select"
            placeholder="Please choose Student Type"
            options={[
              { value: "Undergraduate", label: "Undergraduate" },
              { value: "Postgraduate", label: "Postgraduate" },
              { value: "Faculty", label: "Faculty" },
              { value: "Other", label: "Other" },
            ]}
            {...register("role", { required: true })}
            aria-invalid={errors.role ? "true" : "false"}
          />
        </div>
        {errors.role?.type === "required" && <p className="text-red-600 text-xs">Please select Student Type</p>}
      </div>

      <div className="form-group mt-[45px]">
        <Button text={loading ? "Signing In..." : "Sign In"} type="submit" disabled={loading} />
        <Toaster />
      </div>
    </form>
  );
};

export default StudentRegistrationForm;
