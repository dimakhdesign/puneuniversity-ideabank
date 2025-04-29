import { API_KEY } from '../../../config/apiConfig';
import { useState } from "react";
import React from "react";
import FormField from "../FormField";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Button from "../../../ui/Button/Button";

import {
  HiOutlineEnvelope,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";

import "../Form.css";

const LoginForm = () => {
  const { login } = useAuth(); // ✅ token login function
  const [spamCheck, setSpamCheck] = useState({
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10),
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (formData) => {
    try {
      if (parseInt(formData.spamCode) !== spamCheck.num1 + spamCheck.num2) {
        setError("spamCode", {
          type: "manual",
          message: "Incorrect answer. Please try again.",
        });
        return;
      }

      setLoading(true);

      const payload = {
        user_name: formData.email,
        user_pass: formData.password,
        Authorization_key: API_KEY,
      };

      const response = await fetch("/api/loginUser.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (!response.ok || result.Response !== true || !result.field_array) {
        setError("password", {
          type: "manual",
          message: result.msg || "Invalid email or password",
        });
        setLoading(false);
        return;
      }

      const token = result.token;
      const user = result.field_array;

      console.log(result.field_array);

      if (!token || !user?.user_id) {
        setError("password", {
          type: "manual",
          message: "Authentication data missing. Please try again.",
        });
        setLoading(false);
        return;
      }

      login(token, user.user_id, user.AccessLevel); // ✅ send token and user id

      reset();

      // Navigate user based on role
      if (user.AccessLevel === "Admin") {
        navigate("/dashboard-admin");
      } else if (user.AccessLevel === "Student") {
        navigate("/dashboard-student");
      } else if (user.AccessLevel === "Expert") {
        navigate("/dashboard-expert");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("password", {
        type: "manual",
        message: "Something went wrong. Please try again.",
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
        <div className="relative">
          <FormField
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", {
              required: "Please enter Password",
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

      <div className="form-group">
        <div className="w-full relative">
          <FormField
            type="text"
            placeholder="Enter spam code"
            inputMode="numeric"
            {...register("spamCode", {
              required: "Please enter Spam Code",
            })}
            aria-invalid={errors.spamCode ? "true" : "false"}
          />
          <span className="absolute right-2 top-2 text-gray-600">
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
        <Button text={loading ? "Signing In..." : "Sign In"} type="submit" disabled={loading} />
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

export default LoginForm;

