import { useState } from 'react'
import { Search } from 'lucide-react'
import { auditEvents } from '../data/mock'

export function AuditLog() {
  const [search, setSearch] = useState('')

  const filtered = [...auditEvents]
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp))
    .filter(e =>
      e.type.toLowerCase().includes(search.toLowerCase()) ||
      e.actor.toLowerCase().includes(search.toLowerCase()) ||
      e.target.toLowerCase().includes(search.toLowerCase()) ||
      e.details.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div>
      <div className="mb-4">
        <div className="relative w-72">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search events, actors, targets…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-8 pr-4 py-1.5 text-sm bg-white border border-gray-300 rounded text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="bg-white rounded border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Event</th>
              <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Actor</th>
              <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Target</th>
              <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Details</th>
              <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Outcome</th>
              <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-sm text-gray-400">No events match your search.</td>
              </tr>
            ) : (
              filtered.map(event => (
                <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5">
                    <span className="font-mono text-xs text-gray-600">{event.type}</span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500 text-xs">{event.actor}</td>
                  <td className="px-5 py-3.5 text-gray-500 text-xs">{event.target}</td>
                  <td className="px-5 py-3.5 text-gray-400 text-xs max-w-xs truncate">{event.details}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${event.outcome === 'Success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                      {event.outcome}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-gray-400 whitespace-nowrap">
                    {new Date(event.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="px-5 py-2.5 border-t border-gray-100 text-xs text-gray-400">
          Showing {filtered.length} of {auditEvents.length} events
        </div>
      </div>
    </div>
  )
}
