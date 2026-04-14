interface LogoProps {
  size?: number
  className?: string
}

export function QuickBooksLogo({ size = 40, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="40" height="40" rx="8" fill="#2CA01C"/>
      <path d="M8 20c0-4.418 3.582-8 8-8h2v2.5h-2c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5h2V28h-2c-4.418 0-8-3.582-8-8Z" fill="white"/>
      <path d="M32 20c0 4.418-3.582 8-8 8h-2v-2.5h2c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5h-2V12h2c4.418 0 8 3.582 8 8Z" fill="white"/>
      <circle cx="16" cy="20" r="2.5" fill="#2CA01C"/>
      <circle cx="24" cy="20" r="2.5" fill="#2CA01C"/>
    </svg>
  )
}

export function XeroLogo({ size = 40, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="24" height="24" rx="12" fill="#13B5EA"/>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.585 14.655c-1.485 0-2.69-1.206-2.69-2.689 0-1.485 1.207-2.691 2.69-2.691 1.485 0 2.69 1.207 2.69 2.691s-1.207 2.689-2.69 2.689zM7.53 14.644c-.099 0-.192-.041-.267-.116l-2.043-2.04-2.052 2.047c-.069.068-.16.108-.258.108-.202 0-.368-.166-.368-.368 0-.099.04-.191.111-.263l2.04-2.05-2.038-2.047c-.075-.069-.113-.162-.113-.261 0-.203.166-.366.368-.366.098 0 .188.037.258.105l2.055 2.048 2.048-2.045c.069-.071.162-.108.26-.108.211 0 .375.165.375.366 0 .098-.029.188-.104.258l-2.056 2.055 2.055 2.051c.068.069.104.16.104.258 0 .202-.165.368-.365.368h-.01zm8.017-4.591c-.796.101-.882.476-.882 1.404v2.787c0 .202-.165.366-.366.366-.203 0-.367-.165-.368-.366v-4.53c0-.204.16-.366.362-.366.166 0 .316.125.346.289.27-.209.6-.317.93-.317h.105c.195 0 .359.165.359.368 0 .201-.164.352-.375.359 0 0-.09 0-.164.008l.053-.002zm-3.091 2.205H8.625c0 .019.003.037.006.057.02.105.045.211.083.31.194.531.765 1.275 1.829 1.29.33-.003.631-.086.9-.229.21-.12.391-.271.525-.428.045-.058.09-.112.12-.168.18-.229.405-.186.54-.083.164.135.18.391.045.57l-.016.016c-.21.27-.435.495-.689.66-.255.164-.525.284-.811.345-.33.09-.645.104-.975.06-1.095-.135-2.01-.93-2.28-2.01-.06-.21-.09-.42-.09-.645 0-.855.421-1.695 1.125-2.205.885-.615 2.085-.66 3-.075.63.405 1.035 1.021 1.185 1.771.075.419-.21.794-.734.81l.068-.046zm6.129-2.223c-1.064 0-1.931.865-1.931 1.931 0 1.064.866 1.931 1.931 1.931s1.931-.867 1.931-1.931c0-1.065-.866-1.933-1.931-1.933v.002zm0 2.595c-.367 0-.666-.297-.666-.666 0-.367.3-.665.666-.665.367 0 .667.299.667.665 0 .369-.3.667-.667.666zm-8.04-2.603c-.91 0-1.672.623-1.886 1.466v.03h3.776c-.203-.855-.973-1.494-1.891-1.494v-.002z" fill="white"/>
    </svg>
  )
}

export function GustoLogo({ size = 40, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="24" height="24" rx="6" fill="#F45D48"/>
      <g transform="scale(0.5) translate(12, 12)">
        <path d="M21.311 8.768c-1.482 0-2.69 1.212-2.69 2.702s1.208 2.701 2.69 2.701c1.483 0 2.689-1.212 2.689-2.701s-1.206-2.702-2.689-2.702Zm0 4.123a1.42 1.42 0 0 1-1.415-1.421 1.42 1.42 0 0 1 1.415-1.422c.78 0 1.415.638 1.415 1.422s-.635 1.42-1.415 1.42Zm-7.919-1.969-.47-.235c-.204-.102-.332-.18-.384-.239a.283.283 0 0 1-.078-.19c0-.091.04-.168.122-.228.08-.063.193-.091.338-.091.264 0 .556.16.878.48l.794-.797a2.09 2.09 0 0 0-.744-.63 2.06 2.06 0 0 0-.937-.22c-.484 0-.884.143-1.196.431a1.367 1.367 0 0 0-.468 1.04c0 .63.412 1.154 1.24 1.57l.433.218c.373.189.559.381.559.58 0 .108-.052.201-.155.284a.63.63 0 0 1-.409.122c-.156 0-.336-.054-.538-.163a1.81 1.81 0 0 1-.528-.427l-.79.864c.446.584 1.04.878 1.786.878.561 0 1.009-.153 1.34-.458.335-.304.502-.685.502-1.141 0-.342-.093-.642-.277-.897-.185-.255-.525-.504-1.018-.75Zm-7.985 2.66V8.876H4.131v.316a2.662 2.662 0 0 0-1.442-.423C1.206 8.768 0 9.98 0 11.47s1.206 2.701 2.689 2.701c.505 0 1-.142 1.427-.412l-.002.104a1.42 1.42 0 0 1-1.415 1.42c-.265 0-.524-.075-.748-.217l-.631 1.11c.416.255.894.39 1.382.39a2.713 2.713 0 0 0 2.705-2.702c0-.057.004-.227 0-.281ZM2.69 12.89a1.42 1.42 0 0 1-1.415-1.42c0-.784.636-1.422 1.415-1.422s1.415.638 1.415 1.422a1.42 1.42 0 0 1-1.415 1.42Zm7.803-4.016H9.21v2.568c.002.365.002.995-.265 1.264-.128.128-.269.245-.563.245a.707.707 0 0 1-.565-.245c-.269-.27-.266-.901-.265-1.264V8.874H6.27v2.56c-.004.528-.01 1.509.633 2.16.377.38.827.575 1.476.575.65 0 1.1-.193 1.477-.576.643-.65.637-1.633.633-2.159l.004-2.56Zm7.27 3.787c-.104.078-.353.253-.636.213-.23-.03-.418-.2-.447-.768v-2.13h1.507V8.87H16.68V7.434H15.4v.281h-.002v4.223c0 .671.17 2.231 1.726 2.231.788-.012 1.266-.441 1.467-.609l.026-.02-.767-.95a4.174 4.174 0 0 1-.089.07Z" fill="white"/>
      </g>
    </svg>
  )
}

export function ADPLogo({ size = 40, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="40" height="40" rx="8" fill="#D42428"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.5">ADP</text>
    </svg>
  )
}

export function EquifaxLogo({ size = 40, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="40" height="40" rx="8" fill="#003087"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.3">EQUIFAX</text>
    </svg>
  )
}

export function BambooHRLogo({ size = 40, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="40" height="40" rx="8" fill="#73C41D"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.2">BAMBOO</text>
    </svg>
  )
}

export function HomebaseLogo({ size = 40, className = '' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="40" height="40" rx="8" fill="#FF6B00"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.2">HOMEBASE</text>
    </svg>
  )
}

const logoMap: Record<string, React.ComponentType<LogoProps>> = {
  'qbo-accounting': QuickBooksLogo,
  'qbo-payments': QuickBooksLogo,
  'qbd': QuickBooksLogo,
  'qbo-time': QuickBooksLogo,
  'xero': XeroLogo,
  'gusto': GustoLogo,
  'adp': ADPLogo,
  'equifax': EquifaxLogo,
  'bamboohr': BambooHRLogo,
  'homebase': HomebaseLogo,
}

export function IntegrationLogo({ integrationId, size = 40 }: { integrationId: string; size?: number }) {
  const Logo = logoMap[integrationId]
  if (!Logo) return null
  return <Logo size={size} />
}
