import { useState } from 'react'
import { Check, Lock } from 'lucide-react'
import { roles, ALL_PERMISSIONS } from '../data/mock'

export function Roles() {
  const [selected, setSelected] = useState(roles[0].id)
  const role = roles.find(r => r.id === selected)!

  return (
    <div className="flex gap-5">
      {/* Role list */}
      <div className="w-48 shrink-0 space-y-1.5">
        {roles.map(r => (
          <button
            key={r.id}
            onClick={() => setSelected(r.id)}
            className={`w-full text-left px-3.5 py-3 rounded border transition-colors ${
              selected === r.id
                ? 'border-purple-400 bg-purple-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <p className={`text-sm font-medium ${selected === r.id ? 'text-purple-700' : 'text-gray-700'}`}>{r.name}</p>
              {r.isBuiltIn && <Lock size={10} className="text-gray-600" />}
            </div>
            <p className="text-xs text-gray-600 mt-0.5">{r.userCount} user{r.userCount !== 1 ? 's' : ''}</p>
          </button>
        ))}
      </div>

      {/* Role detail */}
      <div className="flex-1 bg-white rounded border border-gray-200 p-5">
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold text-gray-800">{role.name}</h2>
              {role.isBuiltIn && (
                <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 flex items-center gap-1">
                  <Lock size={9} /> Built-in
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-0.5">{role.description}</p>
          </div>
          <span className="text-sm text-gray-600">{role.permissions.length}/{ALL_PERMISSIONS.length} permissions</span>
        </div>

        <div className="grid grid-cols-2 gap-1">
          {ALL_PERMISSIONS.map(perm => {
            const granted = role.permissions.includes(perm)
            const [resource, action] = perm.split('.')
            return (
              <div key={perm} className={`flex items-center gap-2.5 px-3 py-2 rounded ${granted ? 'bg-gray-50' : 'opacity-40'}`}>
                <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${granted ? 'bg-emerald-500' : 'border border-gray-300'}`}>
                  {granted && <Check size={10} className="text-white" strokeWidth={3} />}
                </div>
                <span className="text-xs font-mono text-gray-600">
                  <span className="text-purple-600">{resource}</span>.{action}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
