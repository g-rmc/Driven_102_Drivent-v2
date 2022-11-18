import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import ticketsService from "@/services/tickets-service";
import httpStatus from "http-status";

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {
  try {
    const ticketTypes = await ticketsService.getAllTicketsType();

    return res.status(httpStatus.OK).send(ticketTypes);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getTicketsByUser(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const userTickets = await ticketsService.getUserTickets(userId);

    return res.status(httpStatus.OK).send(userTickets[0]); //Verificar se dado único ou array
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}

export async function postNewTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const ticketTypeId: number = req.body.ticketTypeId;

  try {
    const createdTicket = await ticketsService.createUserTicket(userId, ticketTypeId);

    return res.status(httpStatus.CREATED).send(createdTicket);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}
