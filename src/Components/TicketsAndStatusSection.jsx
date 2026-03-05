import { use } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import TicketCard from "./TicketCard";

export default function TicketsAndStatusSection({ ticketsPromise, setTotalInProgress, setTotalResolved }) {
  const tickets = use(ticketsPromise);
  const [selectedTicket, setSelectedTicket] = useState([]);
  const [taskComplete, setTaskComplete] = useState([]);
  setTotalInProgress(selectedTicket.length);
  setTotalResolved(taskComplete.length)

  const handleCompleteBtn = (selectedTicket) => {
    setTaskComplete([...taskComplete, selectedTicket])
    toast(`"${selectedTicket.title}" is Completed`)
  }

  const cardClicked = (ticket) => {
    setSelectedTicket([...selectedTicket, ticket]);
    toast('Card added in Task Status')
  }


  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE - Tickets */}
        <div className="bg-gray-50 rounded-2xl p-3 lg:col-span-2">
          <h2 className="text-xl font-bold mb-3 text-gray-700">
            Customer Tickets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} cardClicked={cardClicked} />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Task Status */}
        <div className="bg-gray-50 rounded-2xl p-3 relative overflow-hidden shadow-sm">
          <h2 className="text-xl font-bold text-gray-700 mb-3">
            Task Status
          </h2>

          {/* selected card */}
          {selectedTicket.length === 0 ?
            <p className="text-sm text-gray-400 mb-6">
              Select a ticket to add to Task Status
            </p>
            :
            <div className="grid grid-cols-1 gap-3">
              {selectedTicket.map((selectedTicket) => (
                //card
                <div
                  key={selectedTicket.id}
                  className="bg-white rounded-xl cursor-pointer shadow-md p-5 hover:shadow-lg transition duration-300"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {selectedTicket.title}
                  </h3>

                  <button onClick={() => handleCompleteBtn(selectedTicket)} className="bg-[#02A53B] text-amber-50 w-full py-2 rounded-xl ">
                    Complete
                  </button>
                </div>
              ))}
            </div>
          }
          {/* Resolved Section */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Resolved Task
            </h3>

            {
              taskComplete.length === 0 ?
                <p className="text-sm text-gray-400">
                  No resolved tasks yet.
                </p> :
                <div className="grid grid-cols-1 gap-3">
                  {taskComplete.map((singleTaskComplete) => (
                    //card
                    <div
                      key={singleTaskComplete.id}
                      className="bg-[#e0e7ff] rounded-xl shadow-md hover:shadow-lg transition duration-300"
                    >
                      <h3 className="font-semibold text-gray-800 px-4 py-5">
                        {singleTaskComplete.title}
                      </h3>
                    </div>
                  ))}
                </div>
            }
          </div>
        </div>

      </div>
    </main>
  )
}
