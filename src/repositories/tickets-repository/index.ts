import { prisma } from "@/config";
import { TicketType, Ticket } from "@prisma/client";

async function findTicketTypes() {
  return prisma.ticketType.findMany();
}

const ticketsRepository = {
  findTicketTypes
};

export default ticketsRepository;
