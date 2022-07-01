import Image from "next/image";
import React, { useState } from "react";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";
import logo4 from "../img/logo4.png";
import logo5 from "../img/logo5.png";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import PageInfo from "../components/PageInfo";
import { Tooltip } from "@mui/material";

interface Inputs {
  email: string;
  password: string;
}

const index = () => {
  const [login, setLogin] = useState<boolean>(false);
  const { signIn, signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };

  console.log(login);
  return (
    <>
      <section>
        <div className=" w-full  bg-[#f2f0ff] ">
          <PageInfo title={"My Account"} />
        </div>
        <div className="max-w-6xl mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" sm:w-[450px] h-[450px] shadow mx-auto my-10 flex flex-col justify-center items-center space-y-5 p-10 text-[#a8a8b3]   "
          >
            <h2 className="text-3xl text-black">Login</h2>
            <p>Please login using account dtails below</p>
            <label className="w-full block">
              <input
                className="w-full border rounded-sm p-2"
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="p-1 text-[13px] font-light  text-pink-500">
                  Please enter a valid email.
                </p>
              )}
            </label>
            <label className="w-full">
              <input
                className="w-full border rounded-sm p-2"
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="p-1 text-[13px] font-light  text-pink-500">
                  Your password must contain between 4 and 60 characters.
                </p>
              )}
            </label>
            <Tooltip
              title="If you have already Created your account"
              placement="right"
            >
              <button
                onClick={() => setLogin(true)}
                className=" bg-[#FB2E86] hover:bg-pink-600 w-full text-white py-2 rounded-sm"
              >
                Log In
              </button>
            </Tooltip>
            <p>
              Don't have an Account?{" "}
              <Tooltip title="to create an account fill your Emial Address, make a Password and  CLICK  Create account">
                <button
                  onClick={() => setLogin(false)}
                  className=" hover:text-red-500"
                >
                  Create account
                </button>
              </Tooltip>
            </p>
          </form>
        </div>
        <div className="flex justify-around my-28 mx-10">
          <Image src={logo1} height={100} width={160} />
          <Image src={logo2} height={100} width={160} />
          <Image src={logo3} height={100} width={160} />
          <Image src={logo4} height={100} width={160} />
          <Image src={logo5} height={100} width={160} />
        </div>
      </section>
    </>
  );
};

export default index;
