import { useState } from 'react'
import { Search } from 'lucide-react'
import { connections, type ConnectionStatus } from '../data/mock'
import { StatusBadge } from '../components/StatusBadge'

const ALL_STATUSES: ConnectionStatus[] = ['Active', 'Disconnected', 'Revoked', 'Reconnect', 'Failed']

export function Connections() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<ConnectionStatus | 'All'>('All')

  const filtered = connections.filter(c => {
    const matchesSearch =
      c.companyName.toLowerCase().includes(search.toLowerCase()) ||
      String(c.companyId).includes(search) ||
      c.registration.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-8">
      <div className="mb-7">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Connections</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">All OAuth connections across companies and providers</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search company or registration…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9 pr-4 py-1.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 w-72"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {(['All', ...ALL_STATUSES] as const).map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                statusFilter === s
                  ? 'bg-violet-600 text-white'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Company</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Registration</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Status</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Realm ID</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Last Refreshed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-sm text-slate-400">No connections match your filters.</td>
              </tr>
            ) : (
              filtered.map(conn => (
                <tr key={conn.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="font-medium text-slate-800 dark:text-slate-200">{conn.companyName}</p>
                    <p className="text-xs text-slate-400">Company #{conn.companyId}</p>
                  </td>
                  <td className="px-5 py-3.5">
                    <p className="text-slate-700 dark:text-slate-300">{conn.registration}</p>
                    <p className="text-xs text-slate-400">{conn.provider}</p>
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={conn.status} />
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="font-mono text-xs text-slate-500">{conn.realmId}</span>
                  </td>
                  <td className="px-5 py-3.5 text-slate-500 text-xs">
                    {new Date(conn.lastRefreshed).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-400">
          Showing {filtered.length} of {connections.length} connections
        </div>
      </div>
    </div>
  )
}
