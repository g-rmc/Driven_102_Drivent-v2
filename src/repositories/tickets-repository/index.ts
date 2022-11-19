import { prisma } from "@/config";

async function findTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findTicketBtId(ticketId: number) {
  return prisma.ticket.findUnique({
    where: {
      id: ticketId
    }
  });
}

async function findUserTickets(enrollmentId: number) {
  return prisma.ticket.findFirst({
    where: {
      enrollmentId,
    },
    include: {
      TicketType: true,
    }
  }); 
}

async function insertNewTicket(enrollmentId: number, ticketTypeId: number) {
  return prisma.ticket.create(
    {
      data: {
        ticketTypeId,
        enrollmentId,
        status: "RESERVED"
      },
      include: {
        TicketType: true,
      }
    }
  );
}

const ticketsRepository = {
  findTicketTypes,
  findTicketBtId,
  findUserTickets,
  insertNewTicket
};

export default ticketsRepository;
