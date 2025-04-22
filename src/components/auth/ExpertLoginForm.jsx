import React, { useState, useMemo } from "react";
import FormField from "./FormField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";

import {
  HiOutlineEnvelope,
  HiOutlineEye,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";

import "./Form.css";

const ExpertLoginForm = () => {
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

  const onSubmit = (data) => {
    const success = loginUser(data.email, data.password);

    if (!success) {
      setError("password", {
        type: "manual",
        message: "Invalid email or password",
      });
      return;
    }

    if (parseInt(data.spamCode) !== spamCheck.num1 + spamCheck.num2) {
      setError("spamCode", {
        type: "manual",
        message: "Incorrect answer. Please try again.",
      });
      return;
    }

    console.log("Form submitted successfully!");
    navigate("/dashboard");
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
        <Link to="/expert-register" className="text-blue-700">
          Register Now
        </Link>
      </div>
    </form>
  );
};

export default ExpertLoginForm;
