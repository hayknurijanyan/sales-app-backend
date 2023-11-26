import Joi from "joi";

export const productSchema = Joi.object({
  productName: Joi.string().required(),
  productPrice: Joi.number().required(),
});
