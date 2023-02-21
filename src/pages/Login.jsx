import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex justify-center items-center h-screen w-screen`}>
      <div>
        <div className={`flex justify-between`}>
          <img src="qpay_logo.png" alt="" className={`w-[154px] m-auto`} />
        </div>
        <div
          className={`shadow-md rounded-sm mt-[40px] px-[46px] pt-[48px] lg:pb-[80px] pb-[124px]`}
        >
          <p className={`text-[24px] font-medium font-inter text-black`}>
            Login to Dashboard
          </p>

          <div className={`mt-[40px]`}>
            <div className={`my-[24px]`}>
              <p
                className={`text-[14px] font-medium text-[#8D8D8D] font-inter`}
              >
                Email address
              </p>
              <div
                className={`w-[335px] h-[55px] border border-[#F0F0F0] px-[16px] mt-[4px]`}
              >
                <input
                  type="email"
                  className={`h-full w-full outline-none text-[#8D8D8D]`}
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className={`my-[24px]`}>
              <p
                className={`text-[14px] font-medium text-[#8D8D8D] font-inter`}
              >
                Password
              </p>
              <div
                className={`w-[335px] h-[55px] border border-[#F0F0F0] px-[16px] flex items-center mt-[4px]`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  className={`h-full w-full outline-none text-[#8D8D8D]`}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <AiFillEyeInvisible
                    onClick={togglePassword}
                    className={`text-[20px] text-primary`}
                  />
                ) : (
                  <AiFillEye
                    onClick={togglePassword}
                    className={`text-[20px] text-primary`}
                  />
                )}
              </div>
            </div>

            <div>
              <div
                className={`bg-primary h-[55px] flex items-center justify-center rounded-md cursor-pointer`}
                onClick={() => navigate("/dashboard")}
              >
                <p
                  className={`text-[14px] font-medium text-white font-inter text-center`}
                >
                  Login
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
