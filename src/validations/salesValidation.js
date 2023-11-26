import Joi from "joi";

export const salesSchema = Joi.object({
  username: Joi.string().required(),
  totalPrice: Joi.number().required(),
  products: Joi.array().required(),
  date: Joi.date().default(Date.now),
});
