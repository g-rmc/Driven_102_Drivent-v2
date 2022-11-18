import { notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";

async function getAllTicketsType() {
  const ticketTypes = await ticketsRepository.findTicketTypes();
  return ticketTypes;
}

async function validateEnrollment(userId: number) {
  const userEnrollment = await enrollmentRepository.findWithAddressByUserId(userId);

  if (!userEnrollment) return null;

  return userEnrollment.id;
}

async function getUserTickets(userId: number) {
  const enrollmentId = await validateEnrollment(userId);

  if (!enrollmentId) throw notFoundError();
  
  const userTickets = await ticketsRepository.findUserTickets(enrollmentId);

  if (!userTickets) throw notFoundError();

  return userTickets;
}

async function createUserTicket(userId: number, ticketTypeId: number) {
  const enrollmentId = await validateEnrollment(userId);

  if (!enrollmentId) throw notFoundError();

  const createdTicket = await ticketsRepository.insertNewTicket(enrollmentId, ticketTypeId);

  return createdTicket;
}

const ticketsService = {
  getAllTicketsType,
  getUserTickets,
  createUserTicket
};

export default ticketsService;
