import { NavLink, Outlet } from 'react-router-dom'
import { PSSidebar } from './PSSidebar'
import { PSHeader } from './PSHeader'

const subnav = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/connections', label: 'Connections' },
  { to: '/available', label: 'Available Integrations' },
  { to: '/registrations', label: 'App Registrations' },
  { to: '/users', label: 'Users' },
  { to: '/roles', label: 'Roles' },
  { to: '/audit', label: 'Audit Log' },
]

export function Layout() {
  return (
    <div className="flex min-h-screen bg-white">
      <PSSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <PSHeader />

        {/* Page content */}
        <div className="flex-1 bg-gray-50 px-8 py-7">
          <h1 className="text-2xl font-semibold text-gray-900 mb-5">Connected External Apps</h1>

          {/* Tab sub-nav */}
          <div className="flex border-b border-gray-200 mb-6 -mx-8 px-8">
            {subnav.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors whitespace-nowrap ${
                    isActive
                      ? 'border-purple-600 text-purple-700'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  )
}
