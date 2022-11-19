import { notFoundError, unauthorizedError } from "@/errors";
import { NewPayment, PaymentData } from "@/protocols";
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

async function createPayment(paymentData: PaymentData, userId: number) {
  const ticket = await ticketsRepository.findTicketBtId(paymentData.ticketId);

  if (!ticket) throw notFoundError();

  const enrollmentId = await validateEnrollment(userId);

  if (ticket.enrollmentId !== enrollmentId) throw unauthorizedError();

  const newPayment: NewPayment = {
    ticketId: paymentData.ticketId,
    value: ticket.TicketType.price,
    cardIssuer: paymentData.cardData.issuer,
    cardLastDigits: paymentData.cardData.number.toString().slice(-4),
  };

  const createdPayment = await paymentsRepository.insertNewPayment(newPayment);

  await ticketsRepository.updateTicketStatusPaid(paymentData.ticketId);
  
  return createdPayment;
}

const paymentsService = {
  getPaymentByTicketId,
  createPayment
};

export default paymentsService;
