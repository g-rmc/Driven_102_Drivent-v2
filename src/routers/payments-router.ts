import { Router } from "express";
import { authenticateToken, validateQuery } from "@/middlewares"; //validateBody
import { getPaymentsById, postNewPayment } from "@/controllers";
import { ticketIdSchema } from "@/schemas";

const paymentsRouter = Router();

paymentsRouter
  .all("/*", authenticateToken)
  .get("/", validateQuery(ticketIdSchema), getPaymentsById)
  .post("/", postNewPayment);

export { paymentsRouter };
