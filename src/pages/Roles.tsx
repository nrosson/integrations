import { useState } from 'react'
import { Check, Lock } from 'lucide-react'
import { roles, ALL_PERMISSIONS } from '../data/mock'

export function Roles() {
  const [selected, setSelected] = useState(roles[0].id)
  const role = roles.find(r => r.id === selected)!

  return (
    <div className="p-8">
      <div className="mb-7">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Roles</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">RBAC roles and their permissions</p>
      </div>

      <div className="flex gap-6">
        {/* Role list */}
        <div className="w-56 shrink-0 space-y-2">
          {roles.map(r => (
            <button
              key={r.id}
              onClick={() => setSelected(r.id)}
              className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                selected === r.id
                  ? 'border-violet-500 bg-violet-50 dark:bg-violet-900/20 dark:border-violet-600'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <p className={`text-sm font-medium ${selected === r.id ? 'text-violet-700 dark:text-violet-300' : 'text-slate-700 dark:text-slate-300'}`}>
                  {r.name}
                </p>
                {r.isBuiltIn && <Lock size={10} className="text-slate-400" />}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{r.userCount} user{r.userCount !== 1 ? 's' : ''}</p>
            </button>
          ))}
        </div>

        {/* Role detail */}
        <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold text-slate-800 dark:text-slate-200">{role.name}</h2>
                {role.isBuiltIn && (
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 flex items-center gap-1">
                    <Lock size={10} /> Built-in
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-500 mt-0.5">{role.description}</p>
            </div>
            <span className="text-sm text-slate-500">{role.permissions.length}/{ALL_PERMISSIONS.length} permissions</span>
          </div>

          <div className="space-y-1">
            {ALL_PERMISSIONS.map(perm => {
              const granted = role.permissions.includes(perm)
              const [resource, action] = perm.split('.')
              return (
                <div key={perm} className={`flex items-center gap-3 px-3 py-2 rounded-md ${granted ? 'bg-slate-50 dark:bg-slate-700/30' : 'opacity-40'}`}>
                  <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${granted ? 'bg-emerald-500' : 'border border-slate-300 dark:border-slate-600'}`}>
                    {granted && <Check size={10} className="text-white" strokeWidth={3} />}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-300">
                      <span className="text-violet-600 dark:text-violet-400">{resource}</span>.{action}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
