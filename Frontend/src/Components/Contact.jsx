import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const contactDetail = {
      fname: data.fname,
      lname: data.lname,
      address: data.address,
      msg: data.msg,
      mobile: data.mobile,
      email: data.email,
    };

    await axios
      .post("http://localhost:3000/user/contact", contactDetail)
      .then((res) => {
        if (res.data) {
          toast.success("Your Application Has Been Sent");
          localStorage.setItem("contact", JSON.stringify(res.data));
          redirect("/");
        }
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <>
      <h1 className="text-center leading-none tracking-tight text-3xl mb-5">
        Get in Touch
      </h1>
      <hr />
      <div className="w-full min-h-screen flex flex-wrap justify-center items-center gap-5">
        <div className="md:w-1/3 flex flex-col justify-center p-7">
          <h1 className="tracking-tight text-xl">Connect with our team</h1>
          <p className="mt-4 leading-none font-extralight flex flex-wrap w-[80%]">
            We're here for you and Talk to real people who are ready to help.
          </p>
          <div className="md:w-1/2 mt-5">
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej-1280x720.png"
              alt="contact us"
              height={500}
              width={500}
            />
          </div>
        </div>
        <div className="w-1/3 flex justify-center p-7">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex gap-3 lg:flex-row">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered md:w-full max-w rounded-md"
                {...register("fname", { required: true })}
              />
              {errors.fname && (
                <span className="text-red-500">
                  firstname must be complete.
                </span>
              )}
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered md:w-full max-w-xs rounded-md"
                {...register("lname", { required: true })}
              />
              {errors.lname && (
                <span className="text-red-500">lastname must be complete.</span>
              )}
            </div>
            <div className="w-full flex gap-3 mt-5">
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs rounded-md"
                {...register("mobile", { required: true })}
              />
              {errors.mobile && (
                <span className="text-red-500">
                  Mobile Number must be complete.
                </span>
              )}
              <input
                type="email"
                placeholder="Email Id"
                className="input input-bordered w-full max-w-xs rounded-md"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email must be complete.</span>
              )}
            </div>
            <textarea
              placeholder="Address"
              className="input input-bordered w-full rounded-md mt-5 place-content-center"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-red-500">Address must be complete.</span>
            )}
            <input
              type="text"
              placeholder="Enter your message"
              className="input input-bordered w-full max-w rounded-md mt-5"
              {...register("msg", { required: true })}
            />
            {errors.msg && (
              <span className="text-red-500">Message must be provided.</span>
            )}
            <div className="form-control mt-5">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary rounded-lg me-5"
                />
                <span className="label-text font-extralight">
                  I agree that the bookstore may contact me at the email address
                  or phone number above
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-outline bg-info border-none w-full btn-sm mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
