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
  /** Override the default CTA button label */
  ctaLabel?: string
  docsUrl?: string
}

export const integrations: IntegrationDef[] = [
  // Accounting
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
    id: 'qbd',
    name: 'QuickBooks Desktop',
    provider: 'Intuit',
    description: 'Sync payroll data with QuickBooks Desktop via a local web connector. Supports Pro, Premier, and Enterprise editions.',
    category: 'Accounting',
    logo: 'QB',
    logoColor: 'bg-[#2CA01C] text-white',
    status: 'available',
    externalIdLabel: 'Company File ID',
    registrationName: 'QuickBooks Desktop',
    ctaLabel: 'Setup',
  },
  {
    id: 'xero',
    name: 'Xero',
    provider: 'Xero',
    description: 'Export payroll data and journal entries to Xero for seamless accounting reconciliation.',
    category: 'Accounting',
    logo: 'XR',
    logoColor: 'bg-[#1AB4D7] text-white',
    status: 'available',
    externalIdLabel: 'Tenant ID',
    registrationName: 'Xero',
  },

  // Payroll
  {
    id: 'gusto',
    name: 'Gusto',
    provider: 'Gusto',
    description: 'Sync employee and payroll data between Patriot and Gusto for a unified payroll experience.',
    category: 'Payroll',
    logo: 'GS',
    logoColor: 'bg-[#F45D48] text-white',
    status: 'available',
    externalIdLabel: 'Company ID',
    registrationName: 'Gusto',
  },
  {
    id: 'adp',
    name: 'ADP Workforce Now',
    provider: 'ADP',
    description: 'Connect payroll records with ADP Workforce Now for streamlined payroll processing and reporting.',
    category: 'Payroll',
    logo: 'AD',
    logoColor: 'bg-[#D42428] text-white',
    status: 'available',
    externalIdLabel: 'Company Code',
    registrationName: 'ADP',
  },

  // HR
  {
    id: 'equifax',
    name: 'The Work Number® from Equifax',
    provider: 'Equifax',
    description: "Automatically report employment and income data to Equifax's verification network for instant employment verification.",
    category: 'HR',
    logo: 'EQ',
    logoColor: 'bg-[#003087] text-white',
    status: 'available',
    externalIdLabel: 'Employer ID',
    registrationName: 'Equifax',
  },
  {
    id: 'bamboohr',
    name: 'BambooHR',
    provider: 'BambooHR',
    description: 'Sync employee records and onboarding data between Patriot and BambooHR to keep HR and payroll in lockstep.',
    category: 'HR',
    logo: 'BH',
    logoColor: 'bg-[#73C41D] text-white',
    status: 'available',
    externalIdLabel: 'Company Domain',
    registrationName: 'BambooHR',
  },

  // Time & Attendance
  {
    id: 'qbo-time',
    name: 'QuickBooks Time',
    provider: 'Intuit',
    description: 'Import employee time tracked in QuickBooks Time directly into Patriot Payroll to streamline timesheet processing.',
    category: 'Time & Attendance',
    logo: 'QB',
    logoColor: 'bg-[#2CA01C] text-white',
    status: 'available',
    externalIdLabel: 'Realm ID',
    registrationName: 'QuickBooks Time',
  },
  {
    id: 'homebase',
    name: 'Homebase',
    provider: 'Homebase',
    description: 'Pull approved timesheets and schedules from Homebase into Patriot for accurate, automatic payroll runs.',
    category: 'Time & Attendance',
    logo: 'HB',
    logoColor: 'bg-[#FF6B00] text-white',
    status: 'available',
    externalIdLabel: 'Location ID',
    registrationName: 'Homebase',
  },
]
