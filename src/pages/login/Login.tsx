import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);

 let navigate: any = useNavigate();

  const form = useForm<formVlaue>();

  interface formVlaue {
    firstname?: string;
    lastname?: string;
    email?: string;
    mobilenumber?: Number;
    password?: string;
    confirmpassword?: string;
    message?: string;
    tc?: boolean;
  }
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors},
  } = form;

  const formSubmit = (info: formVlaue) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setValid(true);
      let login = JSON.stringify(info);
      localStorage.setItem("login", login);
    }, 3000);
  };

  // let login = JSON.stringify(data);  this will empty
  // localStorage.setItem("data", login);
  // the data whenever our component rerender when we going to signup page
  // it will empty the previous data because in state you can see data({}) will be empty object thatswhy....
  //IF YOU want to store data permenant in local storage you need to write this code on handlesubmit like we did..
  useEffect(() => {
    if (valid === true) {
      navigate("/home");
    }
  }, [valid]);

  return (
    <div className=" p-6 grid place-content-center">
      <h1 className="p-4 text-xl">SignUp To Continue...</h1>
      <div className="bg-white h-auto p-4 w-[40vw] border-2  border-zinc-500 rounded-3xl">
        <form
          onPaste={() => {
            alert("paste not allowed");
          }}
          onCopy={() => alert("copy not alowed")}
          autoComplete="off"
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col  justify-around h-full gap-4"
        >
          <div className="flex flex-col">
            <label htmlFor="firstname">First Name<span className="text-red-700">*</span></label>
            <input
              className="p-2 border-2 border-stone-200 rounded-md "
              type="text"
              id="firstname"
              placeholder="Enter Your First Name"
              {...register("firstname", {
                required: {
                  value: true,
                  message: "Enter a firstname",
                },
              })}
            />
            <p className="text-red-600">{errors.firstname?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname">Last Name<span className="text-red-700">*</span></label>
            <input
              className="p-2 border-2 border-stone-200 rounded-md "
              type="text"
              id="lastname"
              placeholder="Enter Your Last Name"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "enter a lastname",
                },
              })}
            />
            <p className="text-red-600">{errors.lastname?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email<span className="text-red-700">*</span></label>
            <input
              className="p-2 border-2 border-stone-200 rounded-md "
              type="email"
              id="email"
              placeholder="Enter Your Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "enter email address",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email",
                },
              })}
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password<span className="text-red-700">*</span></label>
            <input
              className="p-2 border-2 border-stone-200 rounded-md "
              type="password"
              id="password"
              placeholder="Enter The Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Enter a Password",
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long!",
                },
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    "please provide at least one special,one upper,one lower case and one number",
                },
              })}
            />
            <p className="text-red-600">{errors.password?.message}</p>
            {/* <p className="text-red-600">{JSON.stringify(errors.password?.message)}</p> */}
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmpassword">Confirm Password<span className="text-red-700">*</span></label>
            <input
              className="p-2 border-2 border-stone-200 rounded-md "
              type="password"
              id="confirmpassword"
              placeholder="Confirm The Password"
              {...register("confirmpassword", {
                required: {
                  value: true,
                  message: "Password Does Not Match",
                },
                validate: (match) => {
                  const password = getValues("password");
                  return match === password || "Passwords should match!";
                },
              })}
            />
            <p className="text-red-600">{errors.confirmpassword?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="mobilenumber">Mobile Number<span className="text-red-700">*</span></label>
            <input
              className="p-2 border-2 border-stone-200 rounded-md "
              type="text"
              id="mobilenumber"
              placeholder="Enter Your Mobile Number"
              {...register("mobilenumber", {
                required: {
                  value: true,
                  message: "Enter a Mobile Number",
                },
                maxLength: {
                  value: 10,
                  message: "enter your 10 digit mobile number",
                },
              })}
            />
            <p className="text-red-600">{errors.mobilenumber?.message}</p>
          </div>

          <div>
            <input
              type="checkbox"
              id="tc"
              className="mr-2"
              {...register("tc", {
                required: {
                  value: true,
                  message: "Please Agree With The Terms  ",
                },
              })}
            />
            i agree with compony's terms and conditions
            <p className="text-red-600">{errors.tc?.message}</p>
          </div>
          <div>
            {loading ? (
              <div>
                <TailSpin color="red" height={40} />
              </div>
            ) : (
              <button
                type="submit"
                className="border-2 p-2 px-3 border-black rounded-2xl"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
