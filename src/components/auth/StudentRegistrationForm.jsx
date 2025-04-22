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
  HiOutlineBuildingLibrary,
  HiOutlineEnvelope,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

import "./Form.css";

const StudentRegistrationForm = () => {
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
      txt_name: formData.name,
      txt_email: formData.email,
      txt_college: formData.collegename,
      dob: formData.dob,
      txt_type: formData.role,
      txt_password: formData.password,
      Authorization_key: API_KEY,
    };

    try {
      const response = await fetch('/api/registerStudent.php', {
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
          navigate("/student-login");
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
          <span className="absolute right-2 top-2">
            <HiOutlineUserCircle />
          </span>
        </div>

        {errors.name && (
          <p className="text-red-600 text-xs">{errors.name.message}</p>
        )}
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
          <span>
            <HiOutlineBuildingLibrary />
          </span>
        </div>
        {errors.collegename && (
          <p className="text-red-600 text-xs">{errors.collegename.message}</p>
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
          <span>
            <HiOutlineEye />
          </span>
        </div>

        {errors.password && (
          <p className="text-red-600 text-xs">{errors.password.message}</p>
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
          <span>
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
            type="date"
            placeholder="DOB"
            className="pe-[12px]"
            {...register("dob", { required: true })}
            aria-invalid={errors.dob ? "true" : "false"}
          />
        </div>
        {errors.dob?.type === "required" && (
          <p className="text-red-600 text-xs">Please enter DOB</p>
        )}
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
          <span>
            <HiOutlineAcademicCap />
          </span>
        </div>
        {errors.role?.type === "required" && (
          <p className="text-red-600 text-xs">Please select Student Type</p>
        )}
      </div>
      <div className="form-group mt-[45px]">
        <Button text="Sign In" type="submit" onClick={handleSubmit} />
        <Toaster />
      </div>
    </form>
  );
};

export default StudentRegistrationForm;
