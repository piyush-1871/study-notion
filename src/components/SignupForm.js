import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  function changeHandler(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  const [accountType, setAccountType] = useState("student");
  function submitForm(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password and Confirm Password doesn't match.");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
  }
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="bg-gray-800 flex p-1 gap-x-1 my-6 rounded-full max-w-max ">
        <button
          onClick={() => {
            setAccountType("student");
          }}
          className={`${accountType === 'student' ? "bg-black text-gray-200" : "bg-transparent text-gray-400"} py-2 px-5 rounded-full transition-all duration-200`}
        >
          Student
        </button>
        <button className={`${accountType === 'instructor' ? "bg-black text-gray-200" : "bg-transparent text-gray-400"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => {
            setAccountType("instructor");
          }}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitForm} className="">
        <div className="flex gap-x-4 justify-between mt-[20px]">
          <label className="">
            <p className="text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              className="rounded-[0.5rem]  border bg-gray-800 text-gray-200 p-[12px] w-full"
              required
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
            />
          </label>
          <label>
            <p className="text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              className="rounded-[0.5rem]  border bg-gray-800 text-gray-200 p-[12px] w-full"
              required
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
            />
          </label>
        </div>

        <div className="mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="email"
              className="rounded-[0.5rem]  border bg-gray-800 text-gray-200 p-[12px] w-full"
              required
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address"
              value={formData.email}
            />
          </label>
        </div>

        <div className="flex gap-x-4 justify-between mt-[20px]">
          <label className="relative">
            <p className="text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              className="rounded-[0.5rem]  border bg-gray-800 text-gray-200 p-[12px] w-full"
              name="password"
              onChange={changeHandler}
              placeholder="Password"
              value={formData.password}
            />
            <span
              className="absolute right-3 top-[38px] text-gray-400 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              className="rounded-[0.5rem]  border bg-gray-800  text-gray-200 p-[12px] w-full"
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />
            <span
              className="absolute right-3 top-[38px] text-gray-400 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="w-full bg-yellow-300 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
