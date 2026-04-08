import { users } from '../data/mock'

export function Users() {
  return (
    <div className="p-8">
      <div className="mb-7">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Users</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Internal staff with access to the Connected Apps admin portal</p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">User</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Role</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Status</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Last Active</th>
              <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {users.map(user => {
              const initials = user.name.split(' ').map(n => n[0]).join('')
              return (
                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 text-xs font-semibold">
                        {initials}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 dark:text-slate-200">{user.name}</p>
                        <p className="text-xs text-slate-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${user.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-slate-100 text-slate-500'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-slate-500">
                    {new Date(user.lastActive).toLocaleDateString()}
                  </td>
                  <td className="px-5 py-3.5">
                    <button className="text-xs text-violet-600 dark:text-violet-400 hover:underline">Edit role</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-400">
          {users.length} users · authenticated via Okta
        </div>
      </div>
    </div>
  )
}
