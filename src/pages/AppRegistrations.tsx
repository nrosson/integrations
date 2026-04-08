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
    <div className="p-8">
      <div className="flex items-start justify-between mb-7">
        <div>
          <h1 className="text-xl font-semibold text-slate-900 dark:text-white">App Registrations</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">OAuth client credentials per provider and environment</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-md transition-colors">
          <Plus size={14} />
          New Registration
        </button>
      </div>

      <div className="space-y-3">
        {items.map(reg => (
          <div key={reg.id} className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-4 px-5 py-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <p className="font-medium text-slate-800 dark:text-slate-200">{reg.name}</p>
                  <RegistrationStatusBadge status={reg.status} />
                  <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${reg.environment === 'Production' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'}`}>
                    {reg.environment}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{reg.provider} · {reg.connectionCount} connection{reg.connectionCount !== 1 ? 's' : ''} · Created {reg.createdAt}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => rotateSecret(reg.id)}
                  title="Rotate client secret"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <RotateCcw size={12} />
                  Rotate Secret
                </button>
                <button
                  onClick={() => toggleStatus(reg.id)}
                  title={reg.status === 'Active' ? 'Deactivate' : 'Activate'}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <ToggleLeft size={12} />
                  {reg.status === 'Active' ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => setExpanded(expanded === reg.id ? null : reg.id)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  {expanded === reg.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </div>

            {expanded === reg.id && (
              <div className="border-t border-slate-100 dark:border-slate-700 px-5 py-4 bg-slate-50/50 dark:bg-slate-800/50">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">Scopes</p>
                    <div className="flex flex-wrap gap-1.5">
                      {reg.scopes.map(s => (
                        <span key={s} className="font-mono text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">Client Secret</p>
                    <p className="font-mono text-xs text-slate-500">••••••••••••••••••••••••••••••••</p>
                    <p className="text-xs text-slate-400 mt-0.5">Encrypted at rest · AES-256-GCM</p>
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
