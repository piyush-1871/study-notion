import React from "react";
import frame from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-gray-200 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-gray-100">{desc1}</span>
          <br />
          <span className="text-blue-300 italic">{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex items-center w-full my-4 gap-x-2">
          <div className="w-full h-[1px] bg-gray-700"></div>
          <p className="text-gray-700 font-medium leading-[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-gray-700"></div>
        </div>
        <button className="flex w-full items-center justify-center rounded-[8px] font-medium text-gray-100 border border-gray-700 px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img src={frame} alt="frame" width={558} height={504} loading="lazy" className="absolute " />
        <img src={image} width={558} height={490} className="absolute -top-4 right-4" alt="girl" />
      </div>
    </div>
  );
}

export default Template;
