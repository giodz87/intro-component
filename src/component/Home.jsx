import React from "react";
import { useForm } from "react-hook-form";
import icon from "../../images/icon-error.svg";
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const prevUsers = JSON.parse(localStorage.getItem("users")) || [];
    const { firstName, lastName, email, password } = data;

    localStorage.setItem(
      "users",
      JSON.stringify([...prevUsers, { firstName, lastName, email, password }])
    );
  };

  return (
    <div className="flex  flex-col items-center gap-[64px] px-[24px] py-[88px]  desktop:flex-row  desktop:py-[121px]">
      <header className="flex flex-col items-center gap-[16px] ">
        <strong className=" text-[28px] w-[327px] px-[44px] text-[#fff]  text-center font-Poppins  font-normal leading-[36px] desktop:font-bold desktop:text-[50px] desktop:w-[525px] desktop:leading-[55px] desktop:px-0 desktop:text-start">
          Learn to code by watching others
        </strong>
        <p className=" text-[16px] text-center text-[#fff] font-Poppins w-[327px] desktop:w-[525px] desktop:text-start desktop:leading-[26px]">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.{" "}
        </p>
      </header>
      <div className=" flex flex-col gap-[24px]">
        <div className="w-[327px] h-[88px] px-[65px] text-center flex flex-col items-center justify-center rounded-xl bg-[#5E54A4] shadow-md p-4 desktop:w-[540px] desktop:h-[60px]">
          <p className="text-[#fff] font-Poppins">
            <strong>Try it free for 7 days</strong> then $20/mo. thereafter
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-[327px] rounded-lg bg-white shadow-md  flex flex-col items-center justify-center gap-[16px] p-[24px] desktop:w-[540px] desktop:p-[40px] desktop:gap-[20px]"
        >
          <div className=" relative">
            <input
              className=" w-[279px] h-[56px] rounded-md border border-gray-300 bg-white p-4  desktop:w-[460px]"
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: "First Name cannot be empty",
              })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName && (
              <div>
                <p className=" absolute text-xs text-[#FF7979] right-0">
                  {" "}
                  {errors.firstName.message}{" "}
                </p>
                <img src={icon} alt="" className=" absolute top-4 right-3" />{" "}
              </div>
            )}
          </div>
          <div className=" relative">
            <input
              type="text"
              className=" w-[279px] h-[56px] rounded-md border border-gray-300 bg-white p-4  desktop:w-[460px]"
              placeholder="Last Name"
              {...register("lastName", {
                required: "Last Name cannot be empty",
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName && (
              <div>
                <p className=" absolute text-xs text-[#FF7979] right-0">
                  {errors.lastName.message}{" "}
                </p>
                <img src={icon} alt="" className=" absolute top-4 right-3" />{" "}
              </div>
            )}
          </div>
          <div className=" relative">
            <input
              type="email"
              className=" w-[279px] h-[56px] rounded-md border border-gray-300 bg-white p-4  desktop:w-[460px]"
              placeholder="Email Address"
              {...register("email", {
                required: "Looks like this is not an email",
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />

            {errors.email && (
              <div>
                <p className=" absolute text-xs text-[#FF7979] right-0">
                  {" "}
                  {errors.email.message}{" "}
                </p>
                <img src={icon} alt="" className=" absolute top-4 right-3" />{" "}
              </div>
            )}
          </div>
          <div className=" relative">
            <input
              type="password"
              className=" w-[279px] h-[56px] rounded-md border border-gray-300 bg-white p-4  desktop:w-[460px]"
              placeholder="Password"
              {...register("password", {
                required: "Password cannot be empty",
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />

            {errors.password && (
              <div>
                <p className=" absolute text-xs text-[#FF7979] right-0">
                  {errors.password.message}
                </p>
                <img src={icon} alt="" className=" absolute top-4 right-3" />{" "}
              </div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="rounded-md bg-[#38CC8B] shadow-md inset-y-0 bottom-0 p-4 w-[276px] he-[56px] 
             text-[15px] text-[#fff] font-Poppins  desktop:w-[460px]
            "
            >
              CLAIM YOUR FREE TRIAL
            </button>
            <p className=" text-[11px] text-center text-[#A6A1CF] mt-[8px]">
              By clicking the button, you are agreeing to our{" "}
              <strong className=" text-[#FF7979]">Terms and Services</strong>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
