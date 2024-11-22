import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { signup } from "../../src/store/actions/authActions";

function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [photo, setPhoto] = useState("");
  const [city, setCity] = useState("");

  console.log(city,email,password,firstName,lastName, photo);
  

  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.authStore);
  console.log("Estado del Auth", authStore);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password, firstName, lastName, photo, city }));
  };

  const loading = authStore.loading;
  const error = authStore.error;

  return (
    <>
      <section className="mt-0">
        <div className="container h-full px-6 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center">
            {/* <!-- Right column container with form --> */}

            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="pb-4">
                  <h2 className="text-base/7 font-semibold text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm/6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="First name"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          id="first-name"
                          name="first-name"
                          required
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Last name"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLasttName(e.target.value)}
                          id="last-name"
                          name="last-name"
                          required
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Email
                      </label>
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
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="password"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          name="password"
                          required
                          autoComplete="password"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="photo"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Photo
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Photo"
                          type="text"
                          value={photo}
                          onChange={(e) => setPhoto(e.target.value)}
                          id="photo"
                          name="photo"
                          required
                          autoComplete="photo"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="city"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <select
                          placeholder="City"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          id="city"
                          name="city"
                          required
                          autoComplete="city"
                          className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                        >
                          <option value="" disabled selected>
                            Select a city
                          </option>

                          <option value="6718e936d7dcd344d93db999">
                            Paris
                          </option>
                          <option value="6718e936d7dcd344d93db99c">
                            Rio de Janeiro
                          </option>
                          <option value="6718e936d7dcd344d93db99a">
                            New York
                          </option>
                          <option value="6718e936d7dcd344d93db9a7">
                            Seoul
                          </option>
                          <option value="6718e936d7dcd344d93db99d">
                            Sydney
                          </option>
                          <option value="6718e936d7dcd344d93db99b">
                            Tokyo
                          </option>
                          <option value="6718e936d7dcd344d93db99f">Rome</option>
                          <option value="6718e936d7dcd344d93db99e">
                            Cape Town
                          </option>
                          <option value="6718e936d7dcd344d93db9a0">
                            Dubai
                          </option>
                          <option value="6718e936d7dcd344d93db9a6">
                            Mexico City
                          </option>
                          <option value="6718e936d7dcd344d93db9a1">
                            Bangkok
                          </option>
                          <option value="6718e936d7dcd344d93db9a3">
                            London
                          </option>
                          <option value="6718e936d7dcd344d93db9a5">
                            Toronto
                          </option>
                          <option value="6718e936d7dcd344d93db9a2">
                            Istanbul
                          </option>
                          <option value="6718e936d7dcd344d93db9a4">
                            Moscow
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Submit button --> */}

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Sign Up
                  </button>
                  {loading && (
                    <p className="text-center text-teal-400">Loading...</p>
                  )}
                  {error && <p className="text-center text-red-500">{error}</p>}
                </div>

                {/* <!-- Divider --> */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>

                {/* <!-- Social login buttons --> */}
                <div className="w-full">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    <img
                      className="h-5 mr-2"
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                      alt=""
                    />
                    Sign Up with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingUp;
