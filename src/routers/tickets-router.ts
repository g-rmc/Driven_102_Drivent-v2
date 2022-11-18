import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getTicketsType, getTicketsByUser, postNewTicket } from "@/controllers";
//import { createTicketSchema } from "@/schemas";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketsType)
  .get("/", getTicketsByUser)
  .post("/", /*validateBody(createTicketSchema),*/ postNewTicket);

export { ticketsRouter };
