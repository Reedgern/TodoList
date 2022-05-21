import { composeValidators, SimpleValidator } from '@wildberries/validators';

const simpleValidator = new SimpleValidator();

const MIN_DESCRIPTION_LENGTH = 10;

export const descriptionValidator: (value: string) => string =
  composeValidators([
    simpleValidator.requiredValidator('Поле должно быть заполнено.'),
    simpleValidator.minLenghtValidate(
      MIN_DESCRIPTION_LENGTH,
      'Длина поля должна быть не менее 10 символов.',
    ),
  ]);
