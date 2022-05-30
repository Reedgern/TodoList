import Joi from 'joi';

export const responseSchema = Joi.object({
  newTask: Joi.object({
    id: Joi.string().required(),
  }),
});
