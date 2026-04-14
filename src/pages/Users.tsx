import { users } from '../data/mock'

export function Users() {
  return (
    <div>
      <div className="bg-white rounded border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left text-xs font-semibold text-gray-600 px-5 py-3">User</th>
              <th className="text-left text-xs font-semibold text-gray-600 px-5 py-3">Role</th>
              <th className="text-left text-xs font-semibold text-gray-600 px-5 py-3">Status</th>
              <th className="text-left text-xs font-semibold text-gray-600 px-5 py-3">Last Active</th>
              <th className="text-left text-xs font-semibold text-gray-600 px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map(user => {
              const initials = user.name.split(' ').map(n => n[0]).join('')
              return (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-semibold">
                        {initials}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{user.name}</p>
                        <p className="text-xs text-gray-600">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">{user.role}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${user.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-gray-600">
                    {new Date(user.lastActive).toLocaleDateString()}
                  </td>
                  <td className="px-5 py-3.5">
                    <button className="text-xs text-purple-600 hover:underline">Edit role</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="px-5 py-2.5 border-t border-gray-100 text-xs text-gray-600">
          {users.length} users · authenticated via Okta
        </div>
      </div>
    </div>
  )
}
