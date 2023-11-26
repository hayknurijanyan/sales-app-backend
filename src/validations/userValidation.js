import Joi from "joi";

const userSchema = Joi.object({
  username: Joi.string().required(),
  // password: Joi.string().password().required(),
});

export default userSchema;
