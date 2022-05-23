import Joi from 'joi';

export const responseSchema = Joi.object({
  newTask: Joi.object({
    // все данные таски у тебя есть на фронте - надо только id с бекенда получить.
    // незачем гонять лишний траффик
    id: Joi.string().required(),
    description: Joi.string().required().min(1),
    isCompleted: Joi.boolean(),
  }),
});
