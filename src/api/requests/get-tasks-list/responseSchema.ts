import Joi from 'joi';

export const responseSchema = Joi.object({
  tasks: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      // мин не нужен - пустая строка по умолчанию считается не валидной,
      // чтобы '' стала валидной надо указать .allow('')
      description: Joi.string().required().min(1),
      isCompleted: Joi.boolean(),
    }),
  ),
});
