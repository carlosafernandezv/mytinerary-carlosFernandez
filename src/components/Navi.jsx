import { Disclosure, DisclosureButton, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AiFillEnvironment } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCities } from '../store/actions/citiesActions';
import { logout } from '../store/actions/authActions';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', text: 'Home', requireAuth: false, unrequireAuth: false },
  { to: '/cities', text: 'Cities', requireAuth: true, unrequireAuth: false },
  { to: '/Signin', text: 'Login', requireAuth: false, unrequireAuth: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navi() {
  const token = useSelector((state) => state.authStore.token);
  const user = useSelector((state) => state.authStore.user); // Obtiene los datos del usuario
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  return (
    <Disclosure as="nav" className="bg-red-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 text-white hover:bg-red-700 focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <h1 className="text-3xl font-bold text-white">MyTinerary!</h1>
              <AiFillEnvironment className="ml-2 h-8 w-8 text-white" />
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
                              ? 'bg-red-900 text-white'
                              : 'text-white hover:bg-red-700',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )
                        }
                      >
                        {route.text}
                      </NavLink>
                    ),
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {user ? (
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="flex rounded-full bg-red-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2">
                  <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    {user.photo ? (
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.photo} // Renderiza la foto del usuario
                        alt={`${user.firstname} ${user.lastname}`}
                      />
                    ) : (
                      <RxAvatar className="h-8 w-8 fill-white" />
                    )}
                  </MenuButton>
                </div>

                <MenuItems 
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                  <MenuItem>
                    <button
                      className="block w-full px-4 py-2 text-left text-sm text-red-700 hover:bg-red-100"
                      onClick={() => dispatch(logout())}
                    >
                      Sign Out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <RxAvatar className="h-8 w-8 fill-white" />
            )}
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
