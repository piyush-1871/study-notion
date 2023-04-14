import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom";

function LoginForm({setIsLoggedIn}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  function handleFormChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function submitForm(e){
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In Successfully");
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitForm} className="flex flex-col w-full gap-y-4 mt-6">
      <label className="w-full ">
        <p className="text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          type="email"
          required
          className="rounded-[0.5rem]  border bg-gray-800 text-gray-200 p-[12px] w-full"
          value={formData.email}
          onChange={handleFormChange}
          placeholder="Enter email id"
          name="email"
        />
      </label>
      <label className="relative">
        <p className="text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          type={showPassword ? ("text"):("password")}
          required
          className="rounded-[0.5rem]  border bg-gray-800 text-gray-200 p-[12px] w-full"
          value={formData.password}
          onChange={handleFormChange}
          placeholder="Enter password"
          name="password"
        />
        <span className="absolute right-3 top-[38px] text-gray-400 cursor-pointer" onClick={()=> setShowPassword((prev)=> !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
        </span>
        <Link to="#">
            <p className="text-xs mt-1 text-blue-400 max-w-max ml-auto">Forgot Password</p>
        </Link>
      </label>
      <button className="w-full bg-yellow-300 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6">
        Sign in
      </button>

    </form>
  );
}

export default LoginForm;
