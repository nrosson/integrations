import { Outlet, Link } from 'react-router-dom'
import { PSSidebar } from './PSSidebar'
import { PSHeader } from './PSHeader'

export function Layout() {
  return (
    <div className="flex min-h-screen bg-white">
      <PSSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <PSHeader />

        <div className="flex-1 bg-gray-50 px-8 py-7 flex flex-col">
          <h1 className="text-2xl font-semibold text-gray-900 mb-5">Integrations</h1>

          <div className="flex-1">
            <Outlet />
          </div>

          <div className="flex justify-end mt-8">
            <Link
              to="/care"
              className="text-xs font-semibold tracking-widest text-gray-600 hover:text-purple-600 transition-colors uppercase"
            >
              CARE
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
