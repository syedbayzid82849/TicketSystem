import { Suspense } from 'react'
import './App.css'
import CountInProgress from './Components/CountInProgress'
import Navbar from './Components/Navbar'
import TicketsAndStatusSection from './Components/TicketsAndStatusSection'
import Footer from './Components/Footer'
import { useState } from 'react'

function App() {
  const [totalResolved, setTotalResolved] = useState(0)
  const [totalInProgress, setTotalInProgress] = useState(0);
  
  const fetchTickets = async () => {
    const res = await fetch("/tickets.json")
    return res.json()
  }
  const ticketsPromise = fetchTickets();
  const loading =
    <span className="flex mx-auto loading loading-spinner loading-xl"></span>

  return (
    <div>
      <Navbar />
      <CountInProgress totalInProgress={totalInProgress} totalResolved={totalResolved} />
      <Suspense fallback={loading}>
        <TicketsAndStatusSection setTotalResolved={setTotalResolved} setTotalInProgress={setTotalInProgress} ticketsPromise={ticketsPromise} />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
