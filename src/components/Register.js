import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden overflow-y-hidden relative mb-1">
      <img
        className="h-[95vh] w-screen opacity-50  bg-transparent rounded-xl"
        src={require("../assets/login.jpg")}
        alt="logo"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex justify-center   items-center h-screen">
          <div data-aos="zoom-in-up"
            className=" rounded-3xl"
            style={{
              background: "rgb(91,92,205)",
              background:
                " linear-gradient(100deg, rgba(91,92,205,0.8941701680672269) 0%, rgba(200,79,63,0.9557948179271709) 76%)",
            }}
          >
            <div 
              className="sm:w-[25vw] h-fit max-w-md p-8 space-y-3  rounded-3xl justify-center
        shadow-xl shadow-gray-100 dark:text-gray-100"
              style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
            >
              <h1 className="text-2xl font-bold text-center">Get Started</h1>
              <form novalidate="" action="" className="space-y-6">
                <div className="space-y-1 text-sm">
                  {/* <label for="firstname" className="block dark:text-gray-400">
      First Name
    </label> */}
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    className="sm:w-[20vw] px-4 py-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  {/* <label for="lastname" className="block dark:text-gray-400">
      Last Name
    </label> */}
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    className="sm:w-[20vw] px-4 py-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  {/* <label for="email" className="block dark:text-gray-400">
      Email
    </label> */}
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="sm:w-[20vw] px-4 py-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  {/* <label for="password" className="block dark-text-gray-400">
      Password
    </label> */}
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="sm:w-[20vw] px-4 py-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  {/* <label for="confirmPassword" className="block dark:text-gray-400">
      Confirm Password
    </label> */}
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="sm:w-[20vw] px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <button className="block sm:w-[20vw] p-3 text-center  bg-blue-300  rounded-md  dark:text-gray-900 dark:bg-violet-400">
                  Create an Account
                </button>
              </form>

              <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                Already have a Account?
                <a
                  rel="noopener noreferrer"
                  href="/Login"
                  className="underline  dark:text-gray-100"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

