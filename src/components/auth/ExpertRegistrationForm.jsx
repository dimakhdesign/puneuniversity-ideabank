import { API_KEY } from '../../config/apiConfig';

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField";
import Button from "../../ui/Button/Button";

import toast, { Toaster } from "react-hot-toast";
import {
  HiOutlineUserCircle,
  HiOutlineEye,
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";

import "./Form.css";

const ExpertRegistrationForm = () => {
  const { addUser } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // API call for form submission
  const onSubmit = async (formData) => {

    // console.log(formData);

    const payload = {
      txt_fname: formData.firstName,
      txt_lname: formData.lastName,
      txt_email: formData.email,
      txt_mobile: formData.phone,
      txt_password: formData.password,
      Authorization_key: API_KEY,
    };

    try {
      const response = await fetch('/api/registerExpert.php', {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log('API Response:', result);

      if (result.Response === true) {
        toast.success("Registration completed successfully.", {
          duration: 1000,
          position: "top-center",
        });

        setTimeout(() => {
          navigate("/expert-login");
        }, 1000);
      } else {
        toast.error(result.message || "Something went wrong.", {
          duration: 1000,
          position: "top-center",
        });
      }
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error("Network error. Please try again.", {
        duration: 1000,
        position: "top-center",
      });
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
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
            type="password"
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
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          <span className="absolute right-2 top-2">
            <HiOutlineEye />
          </span>
        </div>

        {errors.password && (
          <p className="text-red-600 text-xs">{errors.password.message}</p>
        )}
      </div>

      <div className="form-group mt-[45px]">
        <Button text="Sign In" type="submit" onClick={handleSubmit} />
        <Toaster />
      </div>
    </form>
  );
};

export default ExpertRegistrationForm;
