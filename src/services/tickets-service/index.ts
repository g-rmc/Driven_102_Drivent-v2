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

  if (!userTickets) throw notFoundError();

  return userTickets;
}

async function createUserTicket(userId: number, ticketTypeId: number) {
  const userEnrollment = await enrollmentRepository.findWithAddressByUserId(userId);

  if (!userEnrollment) throw notFoundError();

  const createdTicket = await ticketsRepository.insertNewTicket(userEnrollment.id, ticketTypeId);

  return createdTicket;
}

const ticketsService = {
  getAllTicketsType,
  getUserTickets,
  createUserTicket
};

export default ticketsService;
