import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CareLayout } from './components/CareLayout'
import { Connections } from './pages/Connections'
import { AvailableIntegrations } from './pages/AvailableIntegrations'
import { AppRegistrations } from './pages/AppRegistrations'
import { ManageConnection } from './pages/ManageConnection'
import { Users } from './pages/Users'
import { Roles } from './pages/Roles'
import { AuditLog } from './pages/AuditLog'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/available" replace />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/available" element={<AvailableIntegrations />} />
          <Route path="/registrations" element={<AppRegistrations />} />
          <Route path="/manage/:integrationId" element={<ManageConnection />} />
        </Route>
        <Route path="/care" element={<CareLayout />}>
          <Route index element={<Navigate to="/care/users" replace />} />
          <Route path="users" element={<Users />} />
          <Route path="roles" element={<Roles />} />
          <Route path="audit" element={<AuditLog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
