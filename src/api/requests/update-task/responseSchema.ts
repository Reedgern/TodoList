import Joi from 'joi';

export const responseSchema = Joi.object({
  updatedTask: Joi.object({
    id: Joi.string().required(),
    description: Joi.string().required().min(1),
    isCompleted: Joi.boolean(),
  }),
});
