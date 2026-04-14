import {
  LayoutDashboard,
  BookOpen,
  DollarSign,
  Clock,
  BarChart2,
  Settings,
  Store,
  List,
  ChevronRight,
} from 'lucide-react'

const nav = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Accounting', icon: BookOpen },
  { label: 'Payroll', icon: DollarSign, expandable: true },
  { label: 'Historical Data', icon: Clock, expandable: true },
  { label: 'Reports', icon: BarChart2 },
  { label: 'Settings', icon: Settings, active: true },
  { label: 'Marketplace', icon: Store },
  { label: 'Company List', icon: List },
]

export function PSSidebar() {
  return (
    <aside className="w-[220px] shrink-0 border-r border-gray-200 bg-white flex flex-col min-h-screen">
      {/* Logo */}
      <div className="px-5 py-5">
        <div className="leading-none">
          <p className="text-[22px] font-black text-purple-700 tracking-tight">PATRIOT</p>
          <p className="text-[13px] font-bold text-purple-700 tracking-widest -mt-0.5">SOFTWARE</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-2">
        {nav.map(({ label, icon: Icon, expandable, active }) => (
          <button
            key={label}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-sm transition-colors group ${
              active
                ? 'text-purple-700 font-medium bg-purple-50'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span className="flex items-center gap-3">
              <Icon size={16} className={active ? 'text-purple-600' : 'text-gray-600 group-hover:text-gray-600'} />
              {label}
            </span>
            {expandable && <ChevronRight size={14} className="text-gray-600" />}
          </button>
        ))}
      </nav>
    </aside>
  )
}
