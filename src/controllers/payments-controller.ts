import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import paymentsService from "@/services/payments-service";
import httpStatus from "http-status";

export async function getPaymentsById(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const ticketId = Number(req.query.ticketId);

  try {
    const payment = await paymentsService.getPaymentByTicketId(ticketId, userId);

    return res.status(httpStatus.OK).send(payment);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  }
}

export async function postNewPayment(req: AuthenticatedRequest, res: Response) {
  res.send("POST: /payments");
}
