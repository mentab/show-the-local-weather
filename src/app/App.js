import { Dashboard } from '../features/dashboard/Dashboard'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  )
}

export default App
