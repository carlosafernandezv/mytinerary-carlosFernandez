import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AiFillEnvironment, } from 'react-icons/ai';
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCities } from "../store/actions/citiesActions"
import { logout } from "../store/actions/authActions"
import { NavLink } from "react-router-dom"
import Navi from "./Navi.jsx"

const routes = [
  { to: '/', text: 'Home', requireAuth: false, unrequireAuth: false },
  { to: '/cities', text: 'Cities', requireAuth: true, unrequireAuth: false },
  { to: '/Signin', text: 'Login', requireAuth: false, unrequireAuth: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const token = useSelector((state) => state.authStore.token)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch])

  return (
    <>
      
<Navi></Navi>

      
    </>
  )
}
