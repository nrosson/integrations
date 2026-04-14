import { useState } from 'react'
import { RotateCcw, ToggleLeft, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { registrations, type AppRegistration } from '../data/mock'
import { RegistrationStatusBadge } from '../components/StatusBadge'

export function AppRegistrations() {
  const [items, setItems] = useState<AppRegistration[]>(registrations)
  const [expanded, setExpanded] = useState<string | null>(null)

  function toggleStatus(id: string) {
    setItems(prev => prev.map(r => r.id === id ? { ...r, status: r.status === 'Active' ? 'Inactive' : 'Active' } : r))
  }

  function rotateSecret(id: string) {
    alert(`Secret rotation initiated for registration ${id}. New credentials will be available shortly.`)
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors">
          <Plus size={13} />
          New Registration
        </button>
      </div>

      <div className="space-y-2.5">
        {items.map(reg => (
          <div key={reg.id} className="bg-white rounded border border-gray-200">
            <div className="flex items-center gap-4 px-5 py-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <p className="font-medium text-gray-800">{reg.name}</p>
                  <RegistrationStatusBadge status={reg.status} />
                  <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${reg.environment === 'Production' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-gray-100 text-gray-600'}`}>
                    {reg.environment}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-0.5">{reg.provider} · {reg.connectionCount} connection{reg.connectionCount !== 1 ? 's' : ''} · Created {reg.createdAt}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => rotateSecret(reg.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  <RotateCcw size={11} />
                  Rotate Secret
                </button>
                <button
                  onClick={() => toggleStatus(reg.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  <ToggleLeft size={11} />
                  {reg.status === 'Active' ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => setExpanded(expanded === reg.id ? null : reg.id)}
                  className="p-1.5 text-gray-600 hover:text-gray-600"
                >
                  {expanded === reg.id ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
              </div>
            </div>

            {expanded === reg.id && (
              <div className="border-t border-gray-100 px-5 py-4 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Scopes</p>
                    <div className="flex flex-wrap gap-1.5">
                      {reg.scopes.map(s => (
                        <span key={s} className="font-mono text-xs bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Client Secret</p>
                    <p className="font-mono text-xs text-gray-600">••••••••••••••••••••••••••••••••</p>
                    <p className="text-xs text-gray-600 mt-0.5">Encrypted at rest · AES-256-GCM</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
