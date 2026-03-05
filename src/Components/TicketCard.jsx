import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const TicketCard = ({ ticket, cardClicked }) => {
    const [clickedTicket, setClickedTicket] = useState(false);
    return (
        <div
            key={ticket.id}
            onClick={() => {
                setClickedTicket(true)
                cardClicked(ticket)
            }}
            className="bg-white rounded-xl overflow-hidden cursor-pointer shadow-md p-2 hover:shadow-lg transition duration-300"
        >

            <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">
                    {ticket.title}
                </h3>
                {
                    clickedTicket ?
                        <span className="bg-[#FEBB0C] text-[#9C7700] px-2 rounded-4xl whitespace-nowrap">
                            In-Progress
                        </span> :
                        <span className="bg-[#dcfce7] px-2 rounded-4xl">
                            open
                        </span>
                }
            </div>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                {ticket.description}
            </p>

            <div className="flex justify-between text-xs text-gray-400">
                <div className="flex gap-1">
                    <span>#{ticket.id}</span>
                    <span>{ticket.priority} PRIORITY</span>
                </div>
                <div className="flex gap-2">
                    <span>{ticket.customer}</span>
                    <span className="flex justify-center items-center"><FaCalendarAlt />{ticket.createdAt}</span>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;