import { prisma } from "@/config";
import { NewPayment } from "@/protocols";

async function findPaymentWithTicketId(ticketId: number) {
  return prisma.payment.findFirst({
    where: {
      ticketId
    }
  });
}

async function insertNewPayment(newPayment: NewPayment) {
  return prisma.payment.create({
    data: newPayment
  });
}

const paymentsRepository = {
  findPaymentWithTicketId,
  insertNewPayment
};

export default paymentsRepository;
