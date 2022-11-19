import Joi from "joi";

export const createTicketSchema = Joi.object<{ticketTypeId: number}>({
  ticketTypeId: Joi.number().min(0).required()
});

export const ticketIdSchema = Joi.object<{ticketId: number}>({
  ticketId: Joi.number().min(0).required()
});
