import { NavLink, Outlet, Link } from 'react-router-dom'
import { PSSidebar } from './PSSidebar'
import { PSHeader } from './PSHeader'

const subnav = [
  { to: '/care/users', label: 'Users' },
  { to: '/care/roles', label: 'Roles' },
  { to: '/care/audit', label: 'Audit Log' },
]

export function CareLayout() {
  return (
    <div className="flex min-h-screen bg-white">
      <PSSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <PSHeader />

        {/* Page content */}
        <div className="flex-1 bg-gray-50 px-8 py-7 flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <Link to="/connections" className="text-sm text-gray-400 hover:text-purple-600 transition-colors">
              ← Connected Apps
            </Link>
            <span className="text-gray-300">/</span>
            <h1 className="text-2xl font-semibold text-gray-900">CARE</h1>
          </div>

          {/* Tab sub-nav */}
          <div className="flex border-b border-gray-200 mb-6 -mx-8 px-8">
            {subnav.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
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

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
