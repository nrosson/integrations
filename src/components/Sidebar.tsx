import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Link2,
  AppWindow,
  Users,
  ShieldCheck,
  ScrollText,
} from 'lucide-react'

const nav = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/connections', label: 'Connections', icon: Link2 },
  { to: '/registrations', label: 'App Registrations', icon: AppWindow },
  { to: '/users', label: 'Users', icon: Users },
  { to: '/roles', label: 'Roles', icon: ShieldCheck },
  { to: '/audit', label: 'Audit Log', icon: ScrollText },
]

export function Sidebar() {
  return (
    <aside className="w-60 shrink-0 flex flex-col bg-slate-900 text-slate-300 min-h-screen">
      <div className="px-5 py-5 border-b border-slate-700/60">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-violet-600 flex items-center justify-center">
            <Link2 size={14} className="text-white" />
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-none">Connected Apps</p>
            <p className="text-slate-500 text-xs mt-0.5">Admin Portal</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {nav.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                isActive
                  ? 'bg-slate-700/70 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-5 py-4 border-t border-slate-700/60">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-semibold">SC</div>
          <div>
            <p className="text-slate-300 text-xs font-medium">Sarah Chen</p>
            <p className="text-slate-500 text-xs">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
