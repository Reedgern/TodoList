import Joi from 'joi';

// лишняя вложенность - updatedTask
// все данные обновленной таски есть на фронте - респонс вообще не нужен
export const responseSchema = Joi.object({
  updatedTask: Joi.object({
    id: Joi.string().required(),
    description: Joi.string().required().min(1),
    isCompleted: Joi.boolean(),
  }),
});
