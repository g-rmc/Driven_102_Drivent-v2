//import { CreateUserParams } from "@/services/users-service";
import Joi from "joi";

export const createTicketSchema = Joi.object<{ticketTypeId: number}>({
  ticketTypeId: Joi.number().min(0).required()
});
