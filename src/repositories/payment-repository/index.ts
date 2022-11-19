import { prisma } from "@/config";

async function findPaymentWithTicketId(ticketId: number) {
  return prisma.payment.findFirst({
    where: {
      ticketId
    }
  });
}

const paymentsRepository = {
  findPaymentWithTicketId,
};

export default paymentsRepository;
