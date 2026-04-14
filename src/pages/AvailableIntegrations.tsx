import { useState } from 'react'
import { CheckCircle2, MinusCircle, ExternalLink, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { integrations } from '../data/integrations'
import { connections } from '../data/mock'
import { IntegrationLogo } from '../components/IntegrationLogo'

const categories = [...new Set(integrations.map(i => i.category))]

export function AvailableIntegrations() {
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('All')
  const [statusFilter, setStatusFilter] = useState<'All' | 'Connected' | 'Not Connected'>('All')

  const activeConnections = new Set(
    connections.filter(c => c.status === 'Active').map(c => c.registration)
  )

  const disconnectedConnections = new Set(
    connections.filter(c => c.status === 'Disconnected').map(c => c.registration)
  )

  const filtered = integrations.filter(integration => {
    const connected = activeConnections.has(integration.registrationName)

    const matchesSearch =
      integration.name.toLowerCase().includes(search.toLowerCase()) ||
      integration.provider.toLowerCase().includes(search.toLowerCase()) ||
      integration.category.toLowerCase().includes(search.toLowerCase())

    const matchesCategory = categoryFilter === 'All' || integration.category === categoryFilter

    const matchesStatus =
      statusFilter === 'All' ||
      (statusFilter === 'Connected' && connected) ||
      (statusFilter === 'Not Connected' && !connected)

    return matchesSearch && matchesCategory && matchesStatus
  })

  const visibleCategories = categoryFilter === 'All'
    ? [...new Set(filtered.map(i => i.category))]
    : [categoryFilter]

  return (
    <div>
      {/* Search + filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
          <input
            type="text"
            placeholder="Search apps…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-8 pr-4 py-1.5 text-sm bg-white border border-gray-300 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-52"
          />
        </div>

        <div className="flex gap-1.5 flex-wrap">
          {(['All', ...categories] as const).map(c => (
            <button
              key={c}
              onClick={() => setCategoryFilter(c)}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                categoryFilter === c
                  ? 'bg-purple-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-600 hover:border-gray-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex gap-1.5">
          {(['All', 'Connected', 'Not Connected'] as const).map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                statusFilter === s
                  ? 'bg-purple-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-600 hover:border-gray-400'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-sm text-gray-600">No apps match your search.</p>
        </div>
      ) : (
        visibleCategories.map(category => (
          <div key={category} className="mb-8">
            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">{category}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.filter(i => i.category === category).map(integration => {
                const connected = activeConnections.has(integration.registrationName)
                const disconnected = !connected && disconnectedConnections.has(integration.registrationName)

                return (
                  <div
                    key={integration.id}
                    className="bg-white rounded border border-gray-200 hover:border-purple-200 hover:shadow-sm p-5 flex flex-col gap-4 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0">
                        <IntegrationLogo integrationId={integration.id} size={40} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-gray-800">{integration.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          {connected ? (
                            <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                              <CheckCircle2 size={11} />
                              Connected
                            </span>
                          ) : disconnected ? (
                            <span className="flex items-center gap-1 text-xs text-amber-600 font-medium">
                              <MinusCircle size={11} />
                              Disconnected
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                              <MinusCircle size={11} />
                              Not Connected
                            </span>
                          )}
                          <span className="text-gray-300">·</span>
                          <p className="text-xs text-gray-600">{integration.provider}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed flex-1">{integration.description}</p>

                    <div className="flex items-center gap-2">
                      {connected ? (
                        <Link
                          to={`/manage/${integration.id}`}
                          className="flex-1 max-w-[180px] px-3 py-1.5 text-xs font-medium border border-gray-300 text-gray-600 rounded hover:bg-gray-50 transition-colors text-center"
                        >
                          {integration.ctaLabel ?? 'Configure'}
                        </Link>
                      ) : (
                        <button className="flex-1 max-w-[180px] px-3 py-1.5 text-xs font-medium border border-purple-600 text-purple-600 rounded hover:bg-purple-50 transition-colors">
                          {disconnected ? 'Reconnect' : (integration.ctaLabel ?? 'Connect')}
                        </button>
                      )}
                      <a
                        href={integration.docsUrl ?? '#'}
                        className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-gray-300 text-gray-600 rounded hover:bg-gray-50 transition-colors"
                      >
                        Learn More
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))
      )}
    </div>
  )
}
