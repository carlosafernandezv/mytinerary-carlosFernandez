import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../../src/store/actions/authActions";

import { AiFillEnvironment } from "react-icons/ai";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authStore = useSelector(state => state.authStore)
  console.log("Estado del Auth", authStore);



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
  };

  const loginWithGoogle = () => {
    window.location.href = "http://localhost:8080/api/auth/signin/google";
  };

 
  const loading = authStore.loading;
  const error = authStore.error;

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <AiFillEnvironment className="fill-red-700 mx-auto h-14 w-auto " />
        <h2 className="mt-1 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            {/* <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email
              </label> */}
            <div className="mt-2">
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            {/*
              <div className="flex">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label> 

              </div>
              */}
            <div className="mt-2">
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
              />
            </div>
            <div className="text-sm text-right">
              <a
                href="#"
                className="font-semibold text-red-600 hover:text-red-500"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Sign in
            </button>
            {loading && <p className="text-center text-teal-400">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
          </div>
          <div></div>
        </form>

        <div className="mt-4">
          
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            onClick={() => loginWithGoogle()}
          >
            <img
              className="h-5 mr-2"
              src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
              alt=""
            />
            Login with Google
          </button>
        </div>
        {/* 
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <img
                className="h-5 mr-2"
                src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                alt=""
              />
              Sign in with Google
            </button>
          </form>
           */}

        <p className="mt-2 text-center text-sm/6 text-gray-500">
          Don’t have an account yet?{" "}
          <a
            href="/SingUp"
            className="font-semibold text-red-600 hover:text-red-500"
          >
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
