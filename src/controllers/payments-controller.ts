import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
//import paymentsService from "@services/payments-service";
//import httpStatus from "http-status";

export async function getPaymentsById(req: AuthenticatedRequest, res: Response) {
  res.send("GET: /payments");
}

export async function postNewPayment(req: AuthenticatedRequest, res: Response) {
  res.send("POST: /payments");
}
