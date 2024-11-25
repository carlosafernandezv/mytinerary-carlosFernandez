import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AiFillEnvironment } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCities } from "../store/actions/citiesActions";
import { logout } from "../store/actions/authActions";
import { NavLink } from "react-router-dom";
import Signin from "../Pages/Signin";

import { setUser } from "../store/actions/authActions";

const routes = [
  { to: "/", text: "Home", requireAuth: false, unrequireAuth: false },
  { to: "/cities", text: "Cities", requireAuth: true, unrequireAuth: false },
  { to: "/Signin", text: "Login", requireAuth: false, unrequireAuth: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const token = useSelector((state) => state.authStore.token);
  const dispatch = useDispatch();
  
  const photo = localStorage.getItem("photo");
  const firtName = localStorage.getItem("firtName")

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  return (
    <Disclosure as="nav" className="bg-red-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <h1 className="w-full text-3xl font-bold text-[#fff]">
                MyTinerary!
              </h1>
              <AiFillEnvironment className="fill-white mx-auto h-8 w-auto " />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {routes.map(
                  (route, index) =>
                    (!route.requireAuth || token) &&
                    (!route.unrequireAuth || !token) && (
                      <NavLink
                        key={index}
                        to={route.to}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-red-900 text-white"
                              : "text-white hover:bg-red-700",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )
                        }
                      >
                        {route.text}
                      </NavLink>
                    )
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full text-white bg-red-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>

                  {photo ? (
                    <img className="h-8 w-8 rounded-full" src={photo} />
                    
                  ) : (
                    <RxAvatar className="h-8 w-8 fill-white" />
                  )}
                  {/* <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  /> */}
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                
                {token && (
                  <button
                    className="block px-4 py-2 text-sm text-red-700 data-[focus]:bg-red-100 data-[focus]:outline-none"
                    onClick={() => dispatch(logout())}
                  >
                    Sign Out
                  </button>
                )}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {routes.map((item, index) => (
            <DisclosureButton
              key={index}
              as="a"
              to={item.to}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-red-900 text-white"
                  : "text-red-300 hover:bg-red-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.text}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
