import { useParams, Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'
import { integrations } from '../data/integrations'
import { connections } from '../data/mock'
import { StatusBadge } from '../components/StatusBadge'
import { QBOAccountingSlot } from '../slots/QBOAccountingSlot'
import type { ConnectionStatus } from '../data/mock'

/** Registry of slot components keyed by integration ID. */
const slots: Record<string, React.ComponentType> = {
  'qbo-accounting': QBOAccountingSlot,
}

export function ManageConnection() {
  const { integrationId } = useParams<{ integrationId: string }>()
  const integration = integrations.find(i => i.id === integrationId)

  if (!integration) {
    return (
      <div className="p-8 text-sm text-gray-500">Integration not found.</div>
    )
  }

  // Find the active connection for this integration (using company 101 as the current user's company)
  const connection = connections.find(
    c => c.registration === integration.registrationName && c.companyId === 101
  ) ?? connections.find(c => c.registration === integration.registrationName)

  const SlotComponent = slots[integration.id] ?? null

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
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded flex items-center justify-center text-sm font-bold shrink-0 ${integration.logoColor}`}>
              {integration.logo}
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">{integration.name}</h2>
              <p className="text-xs text-gray-400">{integration.provider}</p>
            </div>
          </div>

          {connection && (
            <StatusBadge status={connection.status as ConnectionStatus} />
          )}
        </div>

        {connection && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">{integration.externalIdLabel}</p>
              <p className="font-mono text-sm text-gray-700">{connection.realmId}</p>
            </div>
            <button
              onClick={() => {
                if (confirm(`Disconnect ${integration.name}? This will revoke access and stop all syncing.`)) {
                  alert('Disconnected.')
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 rounded hover:bg-red-50 transition-colors"
            >
              Disconnect
            </button>
          </div>
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
