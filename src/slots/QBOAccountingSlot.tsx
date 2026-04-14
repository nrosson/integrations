/**
 * QBOAccountingSlot
 *
 * Owned by the QuickBooks Online Accounting integration team.
 * Dropped into the integration profile slot on the Manage Connection page.
 * Responsible for account mapping configuration — entirely separate from
 * the Connected Apps OAuth layer above it.
 */

const accounts = [
  { patriotCategory: 'Wages & Salaries', qboAccount: 'Payroll Expenses' },
  { patriotCategory: 'Employer Taxes', qboAccount: 'Payroll Tax Expense' },
  { patriotCategory: 'Employee Tax Withholdings', qboAccount: 'Payroll Liabilities' },
  { patriotCategory: 'Net Pay', qboAccount: 'Checking — Payroll' },
  { patriotCategory: 'Health Insurance (Employee)', qboAccount: 'Employee Benefits' },
  { patriotCategory: 'Health Insurance (Employer)', qboAccount: 'Employee Benefits' },
  { patriotCategory: '401(k) Employee Contributions', qboAccount: 'Retirement Plan Contributions' },
]

const qboAccountOptions = [
  'Payroll Expenses',
  'Payroll Tax Expense',
  'Payroll Liabilities',
  'Checking — Payroll',
  'Employee Benefits',
  'Retirement Plan Contributions',
  'Other Expense',
]

export function QBOAccountingSlot() {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Account Mapping</h3>
        <p className="text-xs text-gray-600 mt-0.5">
          Map each Patriot payroll category to the corresponding account in your QuickBooks Online chart of accounts.
          These mappings determine where journal entries are posted when payroll runs sync.
        </p>
      </div>

      <div className="border border-gray-200 rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left text-xs font-semibold text-gray-600 px-4 py-2.5 w-1/2">Patriot Category</th>
              <th className="text-left text-xs font-semibold text-gray-600 px-4 py-2.5 w-1/2">QuickBooks Account</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {accounts.map(row => (
              <tr key={row.patriotCategory} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2.5 text-xs text-gray-600">{row.patriotCategory}</td>
                <td className="px-4 py-2.5">
                  <select
                    defaultValue={row.qboAccount}
                    className="w-full text-xs border border-gray-200 rounded px-2 py-1.5 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {qboAccountOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded transition-colors">
          Save Mapping
        </button>
      </div>
    </div>
  )
}
