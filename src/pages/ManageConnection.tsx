import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'
import { integrations } from '../data/integrations'
import { connections as initialConnections } from '../data/mock'
import { StatusBadge } from '../components/StatusBadge'
import { QBOAccountingSlot } from '../slots/QBOAccountingSlot'
import type { Connection } from '../data/mock'

/** Registry of slot components keyed by integration ID. */
const slots: Record<string, React.ComponentType> = {
  'qbo-accounting': QBOAccountingSlot,
}

export function ManageConnection() {
  const { integrationId } = useParams<{ integrationId: string }>()
  const integration = integrations.find(i => i.id === integrationId)

  const initial = integration
    ? (initialConnections.find(c => c.registration === integration.registrationName && c.companyId === 101)
      ?? initialConnections.find(c => c.registration === integration.registrationName))
    : undefined

  const [connection, setConnection] = useState<Connection | undefined>(initial)

  if (!integration) {
    return <div className="p-8 text-sm text-gray-500">Integration not found.</div>
  }

  const SlotComponent = slots[integration.id] ?? null

  function disconnect() {
    if (!confirm(`Disconnect ${integration!.name}? The customer will need to re-authorize to reconnect.`)) return
    if (connection) setConnection({ ...connection, status: 'Disconnected' })
  }

  return (
    <div className="max-w-3xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-5 text-sm text-gray-400">
        <Link to="/available" className="hover:text-purple-600 transition-colors">Available Apps</Link>
        <span>/</span>
        <span className="text-gray-600">{integration.name}</span>
      </div>

      {/* Header card — owned by Connected Apps */}
      <div className="bg-white border border-gray-200 rounded p-5 mb-5">
        {/* Top row: logo + name + status */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded flex items-center justify-center text-sm font-bold shrink-0 ${integration.logoColor}`}>
              {integration.logo}
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">{integration.name}</h2>
              <p className="text-xs text-gray-400">{integration.provider}</p>
            </div>
          </div>
          {connection && <StatusBadge status={connection.status} />}
        </div>

        {/* Connection details grid */}
        {connection ? (
          <>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 pt-4 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Company</p>
                <p className="text-sm text-gray-800 font-medium">{connection.companyName}</p>
                <p className="text-xs text-gray-400">Company #{connection.companyId}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Registration</p>
                <p className="text-sm text-gray-800">{connection.registration}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{integration.externalIdLabel}</p>
                <p className="font-mono text-sm text-gray-700">{connection.realmId}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Last Refreshed</p>
                <p className="text-sm text-gray-700">{new Date(connection.lastRefreshed).toLocaleString()}</p>
              </div>
            </div>

            <div className="flex justify-end mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={disconnect}
                disabled={connection.status === 'Disconnected'}
                className="px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 rounded hover:bg-red-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Disconnect
              </button>
            </div>
          </>
        ) : (
          <p className="text-sm text-gray-400 pt-4 border-t border-gray-100">No active connection found for this integration.</p>
        )}
      </div>

      {/* Profile configuration slot */}
      <div className="bg-white border-2 border-dashed border-gray-200 rounded p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Integration Configuration</p>
            <p className="text-xs text-gray-400 mt-0.5">{integration.name}</p>
          </div>
          <span className="text-xs text-gray-300 font-mono">slot</span>
        </div>

        {SlotComponent ? (
          <SlotComponent />
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <AlertTriangle size={20} className="text-gray-300 mb-2" />
            <p className="text-sm text-gray-400">No configuration component registered for this integration.</p>
            <p className="text-xs text-gray-300 mt-1">The integration team can drop their component here.</p>
          </div>
        )}
      </div>
    </div>
  )
}
