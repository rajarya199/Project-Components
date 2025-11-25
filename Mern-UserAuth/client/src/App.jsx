import { UserProvider } from './context/user.provider'
import './App.css'
import AppRoutes from './routes/AppRoutes'
function App() {

  return (
    <UserProvider>
  <AppRoutes/>
    </UserProvider>
  )
}

export default App
