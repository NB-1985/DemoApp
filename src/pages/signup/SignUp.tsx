import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import Button from "../../component/re_usable/Button";
import { useDispatch } from "react-redux";
import { setTimeout } from "timers/promises";
// import { signUp } from "../../slices_reducers/signUpSlice";

const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const dispatch: any = useDispatch();
  let navigate: any = useNavigate();

  const form = useForm<formVlaue>();

  interface formVlaue {
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    confirmpassword?: string;
    tc?: boolean;
  }
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = form;

    const  formSubmit = (info: formVlaue) => {
      setLoading(true);
      let login = JSON.stringify(info);
      localStorage.setItem("token", login);
      setValid(true);
      setLoading(false);
  };
  

  useEffect(() => {
    if (valid === true) {
      navigate("/");
    }
  }, [valid]);

  return (
    <div className=" p-6 grid place-content-center ">
      <h1 className="p-4 text-xl">SignUp To Continue...</h1>
      <div className="bg-white h-auto p-4 sm:w-[40vw] border-2  border-zinc-500 rounded-3xl">
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
            <label htmlFor="firstname">
              First Name<span className="text-red-700">*</span>
            </label>
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
            <label htmlFor="lastname">
              Last Name<span className="text-red-700">*</span>
            </label>
            <input
              className="p-2 border-2 border-stone-200 rounded-md "
              type="text"
              id="lastname"
              placeholder="Enter Your Last Name"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Enter a lastname",
                },
              })}
            />
            <p className="text-red-600">{errors.lastname?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">
              Email<span className="text-red-700">*</span>
            </label>
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
            <label htmlFor="password">
              Password<span className="text-red-700">*</span>
            </label>
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
                    "please provide password with at least one special,one upper case,one lower case and one number",
                },
              })}
            />
            <p className="text-red-600">{errors.password?.message}</p>
            {/* <p className="text-red-600">{JSON.stringify(errors.password?.message)}</p> */}
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmpassword">
              Confirm Password<span className="text-red-700">*</span>
            </label>
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
      <p className="py-3">Already User? Login...</p>

      <div>
        <Link to={"/signup/login"}>
          <Button name="LogIn" className="hover:bg-zinc-700" />
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default SignUp;
