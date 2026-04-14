import { CheckCircle2, ExternalLink, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { integrations } from '../data/integrations'
import { connections } from '../data/mock'

const categories = [...new Set(integrations.map(i => i.category))]

export function AvailableIntegrations() {
  const activeConnections = new Set(
    connections.filter(c => c.status === 'Active').map(c => c.registration)
  )

  const isConnected = (registrationName: string) => activeConnections.has(registrationName)

  return (
    <div>
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">{category}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {integrations.filter(i => i.category === category).map(integration => {
              const connected = isConnected(integration.registrationName)
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
                    <div className={`w-10 h-10 rounded flex items-center justify-center text-xs font-bold shrink-0 ${integration.logoColor}`}>
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
                          <span className="flex items-center gap-1 text-xs text-gray-600 font-medium">
                            <Clock size={11} />
                            Coming soon
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600">{integration.provider}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed flex-1">{integration.description}</p>

                  {/* Actions */}
                  {!comingSoon && (
                    <div className="flex items-center gap-2">
                      {connected ? (
                        <Link
                          to={`/manage/${integration.id}`}
                          className="flex-1 px-3 py-1.5 text-xs font-medium border border-gray-300 text-gray-600 rounded hover:bg-gray-50 transition-colors text-center"
                        >
                          Manage Connection
                        </Link>
                      ) : (
                        <button className="flex-1 px-3 py-1.5 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors">
                          Connect
                        </button>
                      )}
                      {integration.docsUrl && (
                        <a
                          href={integration.docsUrl}
                          className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-gray-300 text-gray-600 rounded hover:bg-gray-50 transition-colors"
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
