import { prisma } from "@/config";
import { TicketType, Ticket } from "@prisma/client";

async function findTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findUserTickets(enrollmentId: number) {
  return prisma.ticket.findMany({
    where: {
      enrollmentId,
    },
    include: {
      TicketType: true,
    }
  }); 
}

const ticketsRepository = {
  findTicketTypes,
  findUserTickets
};

export default ticketsRepository;
