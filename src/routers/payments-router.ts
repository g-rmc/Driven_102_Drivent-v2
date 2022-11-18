import { Router } from "express";
import { authenticateToken } from "@/middlewares"; //validateBody
import { getPaymentsById, postNewPayment } from "@/controllers";
//import { createPaymentSchema } from "@/schemas";

const paymentsRouter = Router();

paymentsRouter
  .all("/*", authenticateToken)
  .get("/", getPaymentsById)
  .post("/", postNewPayment);

export { paymentsRouter };
