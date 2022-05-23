import Joi from 'joi';

export const responseSchema = Joi.object({
  // вообще можно вернуть пустой объект как респонс ибо все известные данные есть
  id: Joi.string().required(),
});
