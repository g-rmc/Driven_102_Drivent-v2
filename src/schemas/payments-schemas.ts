import Joi from "joi";
import { CardData } from "@/protocols";

export const paymentDataSchema = Joi.object<{ticketId: number, cardData: CardData}>({
  ticketId: Joi.number().required(),
  cardData: Joi.object({
    issuer: Joi.string().required(),
    number: Joi.number().required(),
    name: Joi.string().required(),
    expirationDate: Joi.date().required(),
    cvv: Joi.number().required(),
  }).required(),
});
