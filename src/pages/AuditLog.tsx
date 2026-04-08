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
    <div className="p-8">
      <div className="mb-7">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Audit Log</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Immutable record of all token and admin operations</p>
      </div>

      <div className="mb-5">
        <div className="relative w-80">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search events, actors, targets…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Event</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Actor</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Target</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Details</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Outcome</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-sm text-slate-400">No events match your search.</td>
              </tr>
            ) : (
              filtered.map(event => (
                <tr key={event.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="px-5 py-3.5">
                    <span className="font-mono text-xs text-slate-600 dark:text-slate-300">{event.type}</span>
                  </td>
                  <td className="px-5 py-3.5 text-slate-600 dark:text-slate-400 text-xs">{event.actor}</td>
                  <td className="px-5 py-3.5 text-slate-600 dark:text-slate-400 text-xs">{event.target}</td>
                  <td className="px-5 py-3.5 text-slate-500 text-xs max-w-xs truncate">{event.details}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${event.outcome === 'Success' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                      {event.outcome}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-slate-400 whitespace-nowrap">
                    {new Date(event.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-400">
          Showing {filtered.length} of {auditEvents.length} events
        </div>
      </div>
    </div>
  )
}
