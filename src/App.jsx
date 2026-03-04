import './App.css'
import CountInProgress from './Components/CountInProgress'
import Navbar from './Components/Navbar'
import TicketsAndStatusSection from './Components/TicketsAndStatusSection/TicketsAndStatusSection'

function App() {

  return (
    <div>
      <Navbar />
      <CountInProgress />
      <TicketsAndStatusSection />
    </div>
  )
}

export default App
