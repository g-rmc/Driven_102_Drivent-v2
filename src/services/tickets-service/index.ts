import ticketsRepository from "@/repositories/tickets-repository";

async function getAllTicketsType() {
  const ticketTypes = ticketsRepository.findTicketTypes();
  return ticketTypes;
}

const ticketsService = {
  getAllTicketsType
};

export default ticketsService;
