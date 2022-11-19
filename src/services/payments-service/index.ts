import { notFoundError, unauthorizedError } from "@/errors";
import paymentsRepository from "@/repositories/payment-repository";
import ticketsRepository from "@/repositories/tickets-repository";
import { validateEnrollment } from "@/services";

async function getPaymentByTicketId(ticketId: number, userId: number) {
  const ticket = await ticketsRepository.findTicketBtId(ticketId);

  if (!ticket) throw notFoundError();

  const enrollmentId = await validateEnrollment(userId);

  if (ticket.enrollmentId !== enrollmentId) throw unauthorizedError();

  const payment = await paymentsRepository.findPaymentWithTicketId(ticket.id);
  return payment;
}

const paymentsService = {
  getPaymentByTicketId,
};

export default paymentsService;
