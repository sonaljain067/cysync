import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from './components/Sidebar'
import WalletList from './components/WalletList'
function App() {

  return (
    <div className="app bg-darkblack">
      <Navbar />
      <div className="flex flex-row">
        <div className="w-1/4 flex-none">
          <Sidebar />
        </div>
        <div className="w-3/4 flex-grow">
          <WalletList />
        </div>
    </div>
    </div>
  )
}

export default App
