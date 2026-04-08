import { RefreshCw, MessageSquare, HelpCircle, LogOut } from 'lucide-react'

export function PSHeader() {
  return (
    <header className="h-[60px] border-b border-gray-200 bg-white flex items-center px-6 shrink-0">
      {/* Company info */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900 text-sm">OH Test Company</span>
          <span className="text-gray-400 text-sm">|</span>
          <span className="text-gray-500 text-sm">PS 612071</span>
          <button className="flex items-center gap-1.5 px-2.5 py-1 border border-purple-400 text-purple-600 rounded text-xs font-medium hover:bg-purple-50 transition-colors">
            <RefreshCw size={11} />
            Switch
          </button>
        </div>
        <div>
          <a href="#" className="text-purple-600 text-xs hover:underline">My Products</a>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-5 text-sm">
        <a href="#" className="text-green-600 font-semibold text-xs hover:underline">Refer a friend, get $200!</a>
        <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 text-xs">
          <MessageSquare size={14} />
          Give Feedback
        </button>
        <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 text-xs">
          <HelpCircle size={14} />
          Get Help
        </button>
        <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 text-xs">
          <LogOut size={14} />
          Log Out
        </button>
      </div>
    </header>
  )
}
