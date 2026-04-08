import { Link2, AlertTriangle, XCircle, CheckCircle2, Activity, RefreshCw } from 'lucide-react'
import { connections, auditEvents } from '../data/mock'
import { StatusBadge } from '../components/StatusBadge'

function StatCard({ label, value, icon: Icon, color }: { label: string; value: number; icon: React.ElementType; color: string }) {
  return (
    <div className="bg-white rounded border border-gray-200 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{label}</p>
        <div className={`w-8 h-8 rounded flex items-center justify-center ${color}`}>
          <Icon size={15} className="text-white" />
        </div>
      </div>
      <p className="text-3xl font-semibold text-gray-900 mt-2">{value}</p>
    </div>
  )
}

export function Dashboard() {
  const counts = {
    total: connections.length,
    active: connections.filter(c => c.status === 'Active').length,
    attention: connections.filter(c => c.status === 'Reconnect' || c.status === 'Failed').length,
    revoked: connections.filter(c => c.status === 'Revoked').length,
  }

  const recent = [...auditEvents].sort((a, b) => b.timestamp.localeCompare(a.timestamp)).slice(0, 5)
  const needsAction = connections.filter(c => c.status !== 'Active' && c.status !== 'Disconnected')

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Connections" value={counts.total} icon={Link2} color="bg-gray-400" />
        <StatCard label="Active" value={counts.active} icon={CheckCircle2} color="bg-emerald-500" />
        <StatCard label="Needs Attention" value={counts.attention} icon={AlertTriangle} color="bg-orange-400" />
        <StatCard label="Revoked" value={counts.revoked} icon={XCircle} color="bg-red-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <Activity size={14} className="text-gray-400" />
            <h2 className="text-sm font-semibold text-gray-700">Connections Requiring Action</h2>
          </div>
          {needsAction.length === 0 ? (
            <p className="text-sm text-gray-400">All connections healthy.</p>
          ) : (
            <div className="space-y-0 divide-y divide-gray-100">
              {needsAction.map(conn => (
                <div key={conn.id} className="flex items-center justify-between py-2.5">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{conn.companyName}</p>
                    <p className="text-xs text-gray-400">{conn.registration}</p>
                  </div>
                  <StatusBadge status={conn.status} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <RefreshCw size={14} className="text-gray-400" />
            <h2 className="text-sm font-semibold text-gray-700">Recent Events</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {recent.map(event => (
              <div key={event.id} className="flex items-start gap-3 py-2.5">
                <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${event.outcome === 'Success' ? 'bg-emerald-400' : 'bg-red-400'}`} />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono text-gray-600">{event.type}</p>
                  <p className="text-xs text-gray-400 truncate">{event.target}</p>
                </div>
                <p className="text-xs text-gray-400 shrink-0">{new Date(event.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
