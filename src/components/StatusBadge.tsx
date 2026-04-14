import type { ConnectionStatus } from '../data/mock'

const styles: Record<ConnectionStatus, string> = {
  Active: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
  Disconnected: 'bg-slate-200 text-slate-800 dark:bg-slate-700/50 dark:text-slate-200',
  Revoked: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
  Reconnect: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  Failed: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
}

export function StatusBadge({ status }: { status: ConnectionStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'Active' ? 'bg-emerald-500' : status === 'Failed' || status === 'Revoked' ? 'bg-red-500' : status === 'Reconnect' ? 'bg-orange-500' : 'bg-slate-400'}`} />
      {status}
    </span>
  )
}

export function RegistrationStatusBadge({ status }: { status: 'Active' | 'Inactive' }) {
  return (
    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${status === 'Active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-700/50 dark:text-slate-400'}`}>
      {status}
    </span>
  )
}
