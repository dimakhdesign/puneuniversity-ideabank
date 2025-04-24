import { API_KEY } from '../../config/apiConfig';
import { useContext } from "react";

import React, { useState } from "react";
import FormField from "./FormField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";



import {
  HiOutlineEnvelope,
  HiOutlineEye,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";

import "./Form.css";

const StudentLoginForm = () => {
  const { loginUser } = useContext(UserContext);

  const [spamCheck, setSpamCheck] = useState({
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      // Spam validation
      if (parseInt(formData.spamCode) !== spamCheck.num1 + spamCheck.num2) {
        setError("spamCode", {
          type: "manual",
          message: "Incorrect answer. Please try again.",
        });
        return;
      }

      const payload = {
        user_name: formData.email,
        user_pass: formData.password,
        Authorization_key: API_KEY,
      };

      // Call login API
      const response = await fetch("/api/loginStudent.php", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("API Response:", result);

      // Handle failure response
      if (!response.ok || result.Response !== true || !result.field_array) {
        setError("password", {
          type: "manual",
          message: result.msg || "Invalid email or password",
        });
        return;
      }

      const user = result.field_array;

      // Match email and password with the response
      if (formData.email !== user.email || formData.password !== user.pass) {
        setError("password", {
          type: "manual",
          message: "Email or password does not match our records.",
        });
        return;
      }

      // Store user in context
      loginUser(user);

      console.log("Saving to context:", loginUser(user));

      // Navigate to dashboard
      navigate("/dashboard-student");
      console.log("You have successfully logged in!")

    } catch (error) {
      console.error("Login error:", error);
      setError("password", {
        type: "manual",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group flex-col">
        <div>
          <FormField
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Please enter Email",
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
            type="text"
            placeholder="Password"
            {...register("password", {
              required: "Please enter Password",
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

      <div className="form-group">
        <div className="w-full">
          <FormField
            type="text"
            placeholder="Enter spam code"
            inputMode="numeric"
            {...register("spamCode", {
              required: "Please enter Spam Code",
            })}
            aria-invalid={errors.spamCode ? "true" : "false"}
          />
          <span>
            <HiOutlineExclamationCircle />
          </span>

          <p className="mt-4 text-sm">
            What is {spamCheck.num1} + {spamCheck.num2}?
          </p>
        </div>
        {errors.spamCode && (
          <p className="text-red-600 text-xs">{errors.spamCode.message}</p>
        )}
      </div>

      <div className="form-group mt-[45px]">
        <Button text="Sign In" type="submit" />
      </div>

      <div className="text-center text-sm">
        Not a member yet?{" "}
        <Link to="/student-register" className="text-blue-700">
          Register Now
        </Link>
      </div>
    </form>
  );
};

export default StudentLoginForm;
