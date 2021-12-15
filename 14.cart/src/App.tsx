import React from 'react'
import { AppProvider, useGlobalContext } from './Context'
import Navbar from './Navbar'
import CartContainer from './CartContainer'

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <AppProvider>
        <Navbar />
        <CartContainer />
      </AppProvider>
    </main>
  )
}

export default App;