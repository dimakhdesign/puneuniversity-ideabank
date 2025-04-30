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
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";

import "../Form.css";

const ExpertRegistrationForm = () => {
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

  const onSubmit = async (formData) => {
    setLoading(true);

    const payload = {
      txt_fname: formData.firstName,
      txt_lname: formData.lastName,
      txt_email: formData.email,
      txt_mobile: formData.phone,
      txt_password: formData.password,
      Authorization_key: API_KEY,
      AccessLevel: "Expert"
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
            placeholder="First Name"
            {...register("firstName", {
              required: "Please enter First Name",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name must contain only letters",
              },
            })}
            aria-invalid={errors.firstName ? "true" : "false"}
            className="border p-2"
          />
          <span className="absolute right-2 top-2">
            <HiOutlineUserCircle />
          </span>
        </div>
        {errors.firstName && (
          <p className="text-red-600 text-xs">{errors.firstName.message}</p>
        )}
      </div>

      <div className="form-group flex-col">
        <div className="relative">
          <FormField
            type="text"
            placeholder="Last Name"
            {...register("lastName", {
              required: "Please enter Last Name",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name must contain only letters",
              },
            })}
            aria-invalid={errors.lastName ? "true" : "false"}
            className="border p-2"
          />
          <span className="absolute right-2 top-2">
            <HiOutlineUserCircle />
          </span>
        </div>
        {errors.lastName && (
          <p className="text-red-600 text-xs">{errors.lastName.message}</p>
        )}
      </div>

      <div className="form-group flex-col">
        <div>
          <FormField
            type="text"
            placeholder="Phone"
            {...register("phone", {
              required: "Please enter Phone",
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
              maxLength: {
                value: 15,
                message: "Phone number must be at most 15 digits",
              },
            })}
            aria-invalid={errors.phone ? "true" : "false"}
          />
          <span className="absolute right-2 top-2">
            <HiOutlinePhone />
          </span>
        </div>
        {errors.phone && (
          <p className="text-red-600 text-xs">{errors.phone.message}</p>
        )}
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
          <span className="absolute right-2 top-2">
            <HiOutlineEnvelope />
          </span>
        </div>
        {errors.email && (
          <p className="text-red-600 text-xs">{errors.email.message}</p>
        )}
      </div>

      <div className="form-group flex-col">
        <div>
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
        {errors.password && (
          <p className="text-red-600 text-xs">{errors.password.message}</p>
        )}
      </div>

      <div className="form-group mt-[45px]">
        <Button
          text={loading ? "Signing In..." : "Sign In"}
          type="submit"
          disabled={loading}
        />
        <Toaster />
      </div>
    </form>
  );
};

export default ExpertRegistrationForm;
