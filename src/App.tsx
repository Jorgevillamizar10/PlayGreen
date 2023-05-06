import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { store } from '../src/redux/store'
import { RouterComponent } from './router'
import '../src/styles/index.css'

function App() {
  let persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {() => <RouterComponent />}
      </PersistGate>
    </Provider>
  )
}

export default App
