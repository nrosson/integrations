export interface IntegrationDef {
  id: string
  name: string
  provider: string
  description: string
  category: string
  logo: string
  logoColor: string
  status: 'available' | 'coming_soon'
  /** What the provider calls their company identifier */
  externalIdLabel: string
  /** The registration name used to look up the connection in mock data */
  registrationName: string
  docsUrl?: string
}

export const integrations: IntegrationDef[] = [
  {
    id: 'qbo-accounting',
    name: 'QuickBooks Online Accounting',
    provider: 'Intuit',
    description: 'Sync payroll journal entries, employee data, and payroll liabilities directly to your QuickBooks Online accounting ledger.',
    category: 'Accounting',
    logo: 'QB',
    logoColor: 'bg-[#2CA01C] text-white',
    status: 'available',
    externalIdLabel: 'Realm ID',
    registrationName: 'QuickBooks Accounting',
    docsUrl: '#',
  },
  {
    id: 'qbo-payments',
    name: 'QuickBooks Online Payments',
    provider: 'Intuit',
    description: 'Process payroll payments and sync transaction records with QuickBooks Payments for unified cash flow visibility.',
    category: 'Accounting',
    logo: 'QB',
    logoColor: 'bg-[#2CA01C] text-white',
    status: 'available',
    externalIdLabel: 'Realm ID',
    registrationName: 'QuickBooks Payments',
    docsUrl: '#',
  },
  {
    id: 'xero',
    name: 'Xero',
    provider: 'Xero',
    description: 'Export payroll data and journal entries to Xero for seamless accounting reconciliation.',
    category: 'Accounting',
    logo: 'XR',
    logoColor: 'bg-[#1AB4D7] text-white',
    status: 'coming_soon',
    externalIdLabel: 'Tenant ID',
    registrationName: 'Xero',
  },
  {
    id: 'gusto',
    name: 'Gusto',
    provider: 'Gusto',
    description: 'Sync employee benefits and HR data between Patriot and Gusto for unified workforce management.',
    category: 'HR & Benefits',
    logo: 'GS',
    logoColor: 'bg-[#F45D48] text-white',
    status: 'coming_soon',
    externalIdLabel: 'Company ID',
    registrationName: 'Gusto',
  },
  {
    id: 'adp',
    name: 'ADP Workforce Now',
    provider: 'ADP',
    description: 'Connect payroll records and employee profiles with ADP Workforce Now.',
    category: 'HR & Benefits',
    logo: 'AD',
    logoColor: 'bg-[#D42428] text-white',
    status: 'coming_soon',
    externalIdLabel: 'Company Code',
    registrationName: 'ADP',
  },
  {
    id: 'equifax',
    name: 'The Work Number® from Equifax',
    provider: 'Equifax',
    description: "Automatically report employment and income data to Equifax's verification network.",
    category: 'Verification',
    logo: 'EQ',
    logoColor: 'bg-[#003087] text-white',
    status: 'coming_soon',
    externalIdLabel: 'Employer ID',
    registrationName: 'Equifax',
  },
]
