import { notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";

async function getAllTicketsType() {
  const ticketTypes = await ticketsRepository.findTicketTypes();
  return ticketTypes;
}

async function getUserTickets(userId: number) {
  const userEnrollment = await enrollmentRepository.findWithAddressByUserId(userId);

  if (!userEnrollment) throw notFoundError();
  
  const userTickets = await ticketsRepository.findUserTickets(userEnrollment.id);

  if (userTickets.length === 0) throw notFoundError();

  return userTickets;
}

const ticketsService = {
  getAllTicketsType,
  getUserTickets
};

export default ticketsService;
