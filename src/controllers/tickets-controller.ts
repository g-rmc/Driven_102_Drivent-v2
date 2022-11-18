import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
//import ticketsService from "@services/tickets-service";
import httpStatus from "http-status";

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {
  res.send("GET: /tickets/types");
}

export async function getTicketsByUser(req: AuthenticatedRequest, res: Response) {
  res.send("GET: /tickets");
}

export async function postNewTicket(req: AuthenticatedRequest, res: Response) {
  res.send("POST: /tickets");
}
