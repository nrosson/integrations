export type ConnectionStatus = 'Active' | 'Disconnected' | 'Revoked' | 'Reconnect' | 'Failed'

export interface Connection {
  id: string
  companyId: number
  companyName: string
  provider: string
  registration: string
  status: ConnectionStatus
  lastRefreshed: string
  expiresAt: string
  realmId: string
}

export interface AppRegistration {
  id: string
  name: string
  provider: string
  environment: 'Production' | 'Sandbox'
  scopes: string[]
  status: 'Active' | 'Inactive'
  connectionCount: number
  createdAt: string
}

export interface User {
  id: string
  name: string
  email: string
  role: string
  lastActive: string
  status: 'Active' | 'Inactive'
}

export interface Role {
  id: string
  name: string
  description: string
  userCount: number
  permissions: string[]
  isBuiltIn: boolean
}

export interface AuditEvent {
  id: string
  type: string
  actor: string
  target: string
  timestamp: string
  details: string
  outcome: 'Success' | 'Failure'
}

export const ALL_PERMISSIONS = [
  'registrations.read',
  'registrations.write',
  'registrations.delete',
  'registrations.rotate_secret',
  'registrations.toggle_status',
  'users.read',
  'users.write',
  'users.manage_roles',
  'roles.read',
  'roles.write',
]

export const connections: Connection[] = [
  { id: '1', companyId: 101, companyName: 'Acme Corp', provider: 'Intuit', registration: 'QuickBooks Accounting', status: 'Active', lastRefreshed: '2026-04-08T10:15:00Z', expiresAt: '2026-04-08T11:15:00Z', realmId: '4620816365169061890' },
  { id: '2', companyId: 204, companyName: 'Riverside Bakery', provider: 'Intuit', registration: 'QuickBooks Accounting', status: 'Active', lastRefreshed: '2026-04-08T09:55:00Z', expiresAt: '2026-04-08T10:55:00Z', realmId: '1234567890123456789' },
  { id: '3', companyId: 317, companyName: 'Summit Legal Group', provider: 'Intuit', registration: 'QuickBooks Payments', status: 'Revoked', lastRefreshed: '2026-04-06T14:30:00Z', expiresAt: '2026-04-06T15:30:00Z', realmId: '9876543210987654321' },
  { id: '4', companyId: 402, companyName: 'Blue Ridge Landscaping', provider: 'Intuit', registration: 'QuickBooks Accounting', status: 'Reconnect', lastRefreshed: '2026-04-05T08:00:00Z', expiresAt: '2026-04-05T09:00:00Z', realmId: '1111222233334444555' },
  { id: '5', companyId: 518, companyName: 'Harbor View Marina', provider: 'Intuit', registration: 'QuickBooks Accounting', status: 'Active', lastRefreshed: '2026-04-08T10:02:00Z', expiresAt: '2026-04-08T11:02:00Z', realmId: '5555666677778888999' },
  { id: '6', companyId: 623, companyName: 'Pinecrest Auto Parts', provider: 'Intuit', registration: 'QuickBooks Payments', status: 'Disconnected', lastRefreshed: '2026-04-01T16:45:00Z', expiresAt: '2026-04-01T17:45:00Z', realmId: '0000111122223333444' },
  { id: '7', companyId: 731, companyName: 'Lakewood Family Clinic', provider: 'Intuit', registration: 'QuickBooks Accounting', status: 'Active', lastRefreshed: '2026-04-08T09:30:00Z', expiresAt: '2026-04-08T10:30:00Z', realmId: '7777888899990000111' },
  { id: '8', companyId: 845, companyName: 'Ironclad Fabrication', provider: 'Intuit', registration: 'QuickBooks Accounting', status: 'Failed', lastRefreshed: '2026-04-07T22:10:00Z', expiresAt: '2026-04-07T23:10:00Z', realmId: '3333444455556666777' },
  { id: '9', companyId: 101, companyName: 'Acme Corp', provider: 'Xero', registration: 'Xero', status: 'Disconnected', lastRefreshed: '2026-03-20T11:00:00Z', expiresAt: '2026-03-20T12:00:00Z', realmId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' },
]

export const registrations: AppRegistration[] = [
  { id: '1', name: 'QuickBooks Accounting', provider: 'Intuit', environment: 'Production', scopes: ['com.intuit.quickbooks.accounting'], status: 'Active', connectionCount: 5, createdAt: '2026-01-15' },
  { id: '2', name: 'QuickBooks Payments', provider: 'Intuit', environment: 'Production', scopes: ['com.intuit.quickbooks.payment'], status: 'Active', connectionCount: 2, createdAt: '2026-01-15' },
  { id: '3', name: 'QuickBooks Accounting (Sandbox)', provider: 'Intuit', environment: 'Sandbox', scopes: ['com.intuit.quickbooks.accounting'], status: 'Active', connectionCount: 0, createdAt: '2026-02-01' },
  { id: '4', name: 'QuickBooks Payments (Sandbox)', provider: 'Intuit', environment: 'Sandbox', scopes: ['com.intuit.quickbooks.payment'], status: 'Inactive', connectionCount: 0, createdAt: '2026-02-01' },
]

export const users: User[] = [
  { id: '1', name: 'Sarah Chen', email: 'schen@patriotsoftware.com', role: 'Administrator', lastActive: '2026-04-08T10:30:00Z', status: 'Active' },
  { id: '2', name: 'Marcus Webb', email: 'mwebb@patriotsoftware.com', role: 'Operator', lastActive: '2026-04-08T09:15:00Z', status: 'Active' },
  { id: '3', name: 'Priya Nair', email: 'pnair@patriotsoftware.com', role: 'Auditor', lastActive: '2026-04-07T16:00:00Z', status: 'Active' },
  { id: '4', name: 'James Kowalski', email: 'jkowalski@patriotsoftware.com', role: 'Operator', lastActive: '2026-04-06T11:45:00Z', status: 'Active' },
  { id: '5', name: 'Dana Flores', email: 'dflores@patriotsoftware.com', role: 'Auditor', lastActive: '2026-03-28T14:20:00Z', status: 'Inactive' },
]

export const roles: Role[] = [
  {
    id: '1', name: 'Administrator', description: 'Full access to all Connected Apps resources', userCount: 1, isBuiltIn: true,
    permissions: ALL_PERMISSIONS,
  },
  {
    id: '2', name: 'Operator', description: 'Manage registrations and read users and roles', userCount: 2, isBuiltIn: true,
    permissions: ['registrations.read', 'registrations.write', 'registrations.delete', 'registrations.rotate_secret', 'registrations.toggle_status', 'users.read', 'roles.read'],
  },
  {
    id: '3', name: 'Auditor', description: 'Read-only access to registrations, users, and roles', userCount: 2, isBuiltIn: true,
    permissions: ['registrations.read', 'users.read', 'roles.read'],
  },
]

export const auditEvents: AuditEvent[] = [
  { id: '1', type: 'token.refreshed', actor: 'Worker', target: 'Company 101 / QuickBooks Accounting', timestamp: '2026-04-08T10:15:00Z', details: 'Token refreshed successfully at half-life interval', outcome: 'Success' },
  { id: '2', type: 'connection.revoked', actor: 'Worker', target: 'Company 317 / QuickBooks Payments', timestamp: '2026-04-06T14:30:00Z', details: 'Intuit returned 401; connection marked Revoked', outcome: 'Failure' },
  { id: '3', type: 'registration.rotated_secret', actor: 'Sarah Chen', target: 'QuickBooks Accounting', timestamp: '2026-04-05T09:00:00Z', details: 'Client secret rotated', outcome: 'Success' },
  { id: '4', type: 'connection.reconnect_required', actor: 'Worker', target: 'Company 402 / QuickBooks Accounting', timestamp: '2026-04-05T08:00:00Z', details: '5 consecutive refresh failures; status set to Reconnect', outcome: 'Failure' },
  { id: '5', type: 'token.refreshed', actor: 'Worker', target: 'Company 204 / QuickBooks Accounting', timestamp: '2026-04-08T09:55:00Z', details: 'Token refreshed successfully at half-life interval', outcome: 'Success' },
  { id: '6', type: 'registration.created', actor: 'Sarah Chen', target: 'QuickBooks Accounting (Sandbox)', timestamp: '2026-02-01T13:22:00Z', details: 'New app registration created for Sandbox environment', outcome: 'Success' },
  { id: '7', type: 'connection.disconnected', actor: 'Company 623', target: 'Company 623 / QuickBooks Payments', timestamp: '2026-04-01T16:45:00Z', details: 'Customer initiated disconnect', outcome: 'Success' },
  { id: '8', type: 'user.role_assigned', actor: 'Sarah Chen', target: 'Marcus Webb', timestamp: '2026-04-03T11:10:00Z', details: 'Role changed from Auditor to Operator', outcome: 'Success' },
  { id: '9', type: 'token.refreshed', actor: 'Worker', target: 'Company 518 / QuickBooks Accounting', timestamp: '2026-04-08T10:02:00Z', details: 'Token refreshed successfully at half-life interval', outcome: 'Success' },
  { id: '10', type: 'connection.failed', actor: 'Worker', target: 'Company 845 / QuickBooks Accounting', timestamp: '2026-04-07T22:10:00Z', details: 'Unrecoverable error during token exchange; engineering investigation required', outcome: 'Failure' },
  { id: '11', type: 'token.refreshed', actor: 'Worker', target: 'Company 731 / QuickBooks Accounting', timestamp: '2026-04-08T09:30:00Z', details: 'Token refreshed successfully at half-life interval', outcome: 'Success' },
  { id: '12', type: 'registration.toggled_status', actor: 'Marcus Webb', target: 'QuickBooks Payments (Sandbox)', timestamp: '2026-03-10T15:05:00Z', details: 'Registration status set to Inactive', outcome: 'Success' },
]
