import React from "react";

const LoginSectionOne = () => {
  return (
    <section>
      <div className=" w-full  bg-[#f2f0ff] ">
        <div className="max-w-6xl mx-auto h-[260px] text-[#151875] flex flex-col justify-center space-y-1">
          <h1 className="text-3xl -mt-4">My Account</h1>
          <h5>
            Home . Page <span className="text-[#FB2E86]">My Account</span>
          </h5>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <form className=" w-[450px] h-[450px] shadow mx-auto my-10 flex flex-col justify-center items-center space-y-5 p-10 text-[#a8a8b3]   ">
          <h2 className="text-3xl text-black">Login</h2>
          <p>Please login using account dtails below</p>
          <label className="w-full block">
            <input
              className="w-full border rounded-sm p-2"
              type="email"
              placeholder="Email Address"
            />
          </label>
          <label className="w-full">
            <input
              className="w-full border rounded-sm p-2"
              type="password"
              placeholder="Password"
            />
          </label>
          <button className=" bg-[#FB2E86] hover:bg-pink-600 w-full text-white py-2 rounded-sm">
            Sign In
          </button>
          <p>
            Don't have an Account?{" "}
            <button className=" hover:text-red-500">Create account</button>
          </p>
        </form>
        <div></div>
      </div>
    </section>
  );
};

export default LoginSectionOne;
