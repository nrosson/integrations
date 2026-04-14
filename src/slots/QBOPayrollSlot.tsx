/**
 * QBOPayrollSlot
 *
 * Payroll sync configuration for QuickBooks Online.
 * Controls when and how payroll runs are exported to QBO.
 */

export function QBOPayrollSlot() {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-1">Sync Settings</h3>
        <p className="text-xs text-gray-600">Configure how payroll runs are exported to QuickBooks Online.</p>
      </div>

      <div className="border border-gray-200 rounded divide-y divide-gray-100">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-sm text-gray-800 font-medium">Auto-sync on payroll approval</p>
            <p className="text-xs text-gray-600 mt-0.5">Automatically export journal entries when a payroll run is approved.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4 shrink-0">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-purple-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
          </label>
        </div>

        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-sm text-gray-800 font-medium">Include voided runs</p>
            <p className="text-xs text-gray-600 mt-0.5">Export reversing entries to QBO when a payroll run is voided.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4 shrink-0">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-purple-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
          </label>
        </div>

        <div className="px-4 py-3">
          <p className="text-sm text-gray-800 font-medium mb-2">Journal entry date</p>
          <div className="flex gap-3">
            {['Pay date', 'Period end date', 'Approval date'].map(opt => (
              <label key={opt} className="flex items-center gap-1.5 cursor-pointer">
                <input type="radio" name="je-date" defaultChecked={opt === 'Pay date'} className="accent-purple-600" />
                <span className="text-xs text-gray-700">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="px-4 py-3">
          <p className="text-sm text-gray-800 font-medium mb-2">Memo format</p>
          <input
            type="text"
            defaultValue="Patriot Payroll – {pay_period}"
            className="w-full text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono"
          />
          <p className="text-xs text-gray-500 mt-1">Available tokens: {'{pay_period}'}, {'{company_name}'}, {'{run_id}'}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded transition-colors">
          Save Settings
        </button>
      </div>
    </div>
  )
}
