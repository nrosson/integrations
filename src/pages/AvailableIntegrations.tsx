import { CheckCircle2, ExternalLink, Clock } from 'lucide-react'
import { connections } from '../data/mock'

interface Integration {
  id: string
  name: string
  provider: string
  description: string
  category: string
  logo: string
  status: 'available' | 'coming_soon'
  docsUrl?: string
}

const integrations: Integration[] = [
  {
    id: 'qbo-accounting',
    name: 'QuickBooks Online Accounting',
    provider: 'Intuit',
    description: 'Sync payroll journal entries, employee data, and payroll liabilities directly to your QuickBooks Online accounting ledger.',
    category: 'Accounting',
    logo: 'QB',
    status: 'available',
    docsUrl: '#',
  },
  {
    id: 'qbo-payments',
    name: 'QuickBooks Online Payments',
    provider: 'Intuit',
    description: 'Process payroll payments and sync transaction records with QuickBooks Payments for unified cash flow visibility.',
    category: 'Accounting',
    logo: 'QB',
    status: 'available',
    docsUrl: '#',
  },
  {
    id: 'xero',
    name: 'Xero',
    provider: 'Xero',
    description: 'Export payroll data and journal entries to Xero for seamless accounting reconciliation.',
    category: 'Accounting',
    logo: 'XR',
    status: 'coming_soon',
  },
  {
    id: 'gusto',
    name: 'Gusto',
    provider: 'Gusto',
    description: 'Sync employee benefits and HR data between Patriot and Gusto for unified workforce management.',
    category: 'HR & Benefits',
    logo: 'GS',
    status: 'coming_soon',
  },
  {
    id: 'adp',
    name: 'ADP Workforce Now',
    provider: 'ADP',
    description: 'Connect payroll records and employee profiles with ADP Workforce Now.',
    category: 'HR & Benefits',
    logo: 'AD',
    status: 'coming_soon',
  },
  {
    id: 'equifax',
    name: 'The Work Number® from Equifax',
    provider: 'Equifax',
    description: "Automatically report employment and income data to Equifax's verification network.",
    category: 'Verification',
    logo: 'EQ',
    status: 'coming_soon',
  },
]

const categories = [...new Set(integrations.map(i => i.category))]

const providerColors: Record<string, string> = {
  QB: 'bg-[#2CA01C] text-white',
  XR: 'bg-[#1AB4D7] text-white',
  GS: 'bg-[#F45D48] text-white',
  AD: 'bg-[#D42428] text-white',
  EQ: 'bg-[#003087] text-white',
}

export function AvailableIntegrations() {
  const connectedRegistrations = new Set(
    connections.filter(c => c.status === 'Active').map(c => c.registration)
  )

  const isConnected = (integration: Integration) => {
    if (integration.id === 'qbo-accounting') return connectedRegistrations.has('QuickBooks Accounting')
    if (integration.id === 'qbo-payments') return connectedRegistrations.has('QuickBooks Payments')
    return false
  }

  return (
    <div>
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">{category}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {integrations.filter(i => i.category === category).map(integration => {
              const connected = isConnected(integration)
              const comingSoon = integration.status === 'coming_soon'

              return (
                <div
                  key={integration.id}
                  className={`bg-white rounded border p-5 flex flex-col gap-4 transition-colors ${
                    comingSoon ? 'border-gray-200 opacity-60' : 'border-gray-200 hover:border-purple-200 hover:shadow-sm'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded flex items-center justify-center text-xs font-bold shrink-0 ${providerColors[integration.logo] ?? 'bg-gray-200 text-gray-600'}`}>
                      {integration.logo}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-gray-800">{integration.name}</p>
                        {connected && (
                          <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                            <CheckCircle2 size={11} />
                            Connected
                          </span>
                        )}
                        {comingSoon && (
                          <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                            <Clock size={11} />
                            Coming soon
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400">{integration.provider}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">{integration.description}</p>

                  {/* Actions */}
                  {!comingSoon && (
                    <div className="flex items-center gap-2">
                      {connected ? (
                        <button className="flex-1 px-3 py-1.5 text-xs font-medium border border-gray-300 text-gray-600 rounded hover:bg-gray-50 transition-colors">
                          Manage Connection
                        </button>
                      ) : (
                        <button className="flex-1 px-3 py-1.5 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors">
                          Connect
                        </button>
                      )}
                      {integration.docsUrl && (
                        <a
                          href={integration.docsUrl}
                          className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-gray-300 text-gray-500 rounded hover:bg-gray-50 transition-colors"
                        >
                          <ExternalLink size={11} />
                          Docs
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
