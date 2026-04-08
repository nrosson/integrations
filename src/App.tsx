import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import { Connections } from './pages/Connections'
import { AvailableIntegrations } from './pages/AvailableIntegrations'
import { AppRegistrations } from './pages/AppRegistrations'
import { Users } from './pages/Users'
import { Roles } from './pages/Roles'
import { AuditLog } from './pages/AuditLog'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/available" element={<AvailableIntegrations />} />
          <Route path="/registrations" element={<AppRegistrations />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/audit" element={<AuditLog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
