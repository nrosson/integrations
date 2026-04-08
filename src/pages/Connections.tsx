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
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="relative">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search company or registration…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-8 pr-4 py-1.5 text-sm bg-white border border-gray-300 rounded text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {(['All', ...ALL_STATUSES] as const).map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                statusFilter === s
                  ? 'bg-purple-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-600 hover:border-gray-400'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Company</th>
              <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Registration</th>
              <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Status</th>
              <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Realm ID</th>
              <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Last Refreshed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-sm text-gray-400">No connections match your filters.</td>
              </tr>
            ) : (
              filtered.map(conn => (
                <tr key={conn.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="font-medium text-gray-800">{conn.companyName}</p>
                    <p className="text-xs text-gray-400">Company #{conn.companyId}</p>
                  </td>
                  <td className="px-5 py-3.5">
                    <p className="text-gray-700">{conn.registration}</p>
                    <p className="text-xs text-gray-400">{conn.provider}</p>
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={conn.status} />
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="font-mono text-xs text-gray-400">{conn.realmId}</span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500 text-xs">
                    {new Date(conn.lastRefreshed).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="px-5 py-2.5 border-t border-gray-100 text-xs text-gray-400">
          Showing {filtered.length} of {connections.length} connections
        </div>
      </div>
    </div>
  )
}
