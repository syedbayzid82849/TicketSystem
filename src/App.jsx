import { Suspense } from 'react'
import './App.css'
import CountInProgress from './Components/CountInProgress'
import Navbar from './Components/Navbar'
import TicketsAndStatusSection from './Components/TicketsAndStatusSection'
import Footer from './Components/Footer'

function App() {
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
      <CountInProgress />
      <Suspense fallback={loading}>
        <TicketsAndStatusSection ticketsPromise={ticketsPromise} />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
