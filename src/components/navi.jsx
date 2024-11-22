<Disclosure as="nav" className="bg-red-800">
  <div className="relative flex h-16 items-center justify-between">
    <div className="hidden sm:block">
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
                    isActive ? 'bg-red-900 text-white' : 'text-white hover:bg-red-700',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )
                }
              >
                {route.text}
              </NavLink>
            )
        )}
      </div>
    </div>

    <div className="relative ml-3">
      <Menu>
        <MenuButton className="rounded-full bg-red-800 text-sm focus:outline-none">
          <span className="sr-only">Open user menu</span>
          <RxAvatar className="h-8 w-8 fill-white" />
        </MenuButton>
        <MenuItems>
          <MenuItem>
            {({ active }) => (
              <NavLink
                to="/profile"
                className={`${active ? 'bg-red-100' : ''} block px-4 py-2 text-sm text-red-700`}
              >
                Your Profile
              </NavLink>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <NavLink
                to="/settings"
                className={`${active ? 'bg-red-100' : ''} block px-4 py-2 text-sm text-red-700`}
              >
                Settings
              </NavLink>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => dispatch(logout())}
                className={`${active ? 'bg-red-100' : ''} block w-full text-left px-4 py-2 text-sm text-red-700`}
              >
                Sign out
              </button>
            )}
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  </div>
</Disclosure>
