import { Link2, RefreshCw, AlertTriangle, XCircle, CheckCircle2, Activity } from 'lucide-react'
import { connections, auditEvents } from '../data/mock'
import { StatusBadge } from '../components/StatusBadge'

function StatCard({ label, value, icon: Icon, color }: { label: string; value: number; icon: React.ElementType; color: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
        <div className={`w-8 h-8 rounded-md flex items-center justify-center ${color}`}>
          <Icon size={16} className="text-white" />
        </div>
      </div>
      <p className="text-3xl font-semibold text-slate-900 dark:text-white mt-2">{value}</p>
    </div>
  )
}

export function Dashboard() {
  const counts = {
    total: connections.length,
    active: connections.filter(c => c.status === 'Active').length,
    reconnect: connections.filter(c => c.status === 'Reconnect').length,
    failed: connections.filter(c => c.status === 'Failed').length,
    revoked: connections.filter(c => c.status === 'Revoked').length,
  }

  const recent = [...auditEvents].sort((a, b) => b.timestamp.localeCompare(a.timestamp)).slice(0, 5)

  return (
    <div className="p-8">
      <div className="mb-7">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Dashboard</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Overview of all OAuth connections and recent activity</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Connections" value={counts.total} icon={Link2} color="bg-slate-500" />
        <StatCard label="Active" value={counts.active} icon={CheckCircle2} color="bg-emerald-500" />
        <StatCard label="Needs Attention" value={counts.reconnect + counts.failed} icon={AlertTriangle} color="bg-orange-500" />
        <StatCard label="Revoked" value={counts.revoked} icon={XCircle} color="bg-red-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Connection status breakdown */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-5">
          <div className="flex items-center gap-2 mb-4">
            <Activity size={15} className="text-slate-400" />
            <h2 className="text-sm font-medium text-slate-700 dark:text-slate-300">Connections Requiring Action</h2>
          </div>
          {connections.filter(c => c.status !== 'Active' && c.status !== 'Disconnected').length === 0 ? (
            <p className="text-sm text-slate-400">All connections healthy.</p>
          ) : (
            <div className="space-y-2">
              {connections
                .filter(c => c.status !== 'Active' && c.status !== 'Disconnected')
                .map(conn => (
                  <div key={conn.id} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{conn.companyName}</p>
                      <p className="text-xs text-slate-500">{conn.registration}</p>
                    </div>
                    <StatusBadge status={conn.status} />
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Recent audit events */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-5">
          <div className="flex items-center gap-2 mb-4">
            <RefreshCw size={15} className="text-slate-400" />
            <h2 className="text-sm font-medium text-slate-700 dark:text-slate-300">Recent Events</h2>
          </div>
          <div className="space-y-0">
            {recent.map(event => (
              <div key={event.id} className="flex items-start gap-3 py-2.5 border-b border-slate-100 dark:border-slate-700 last:border-0">
                <span className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${event.outcome === 'Success' ? 'bg-emerald-400' : 'bg-red-400'}`} />
                <div className="min-w-0">
                  <p className="text-xs font-mono text-slate-600 dark:text-slate-300">{event.type}</p>
                  <p className="text-xs text-slate-500 truncate">{event.target}</p>
                </div>
                <p className="text-xs text-slate-400 ml-auto shrink-0">{new Date(event.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
