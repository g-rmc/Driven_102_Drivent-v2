import { Router } from "express";
import { authenticateToken, validateBody, validateQuery } from "@/middlewares"; //validateBody
import { getPaymentsById, postNewPayment } from "@/controllers";
import { ticketIdSchema, paymentDataSchema } from "@/schemas";

const paymentsRouter = Router();

paymentsRouter
  .all("/*", authenticateToken)
  .get("/", validateQuery(ticketIdSchema), getPaymentsById)
  .post("/process", validateBody(paymentDataSchema), postNewPayment);

export { paymentsRouter };
