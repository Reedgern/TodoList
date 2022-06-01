import { composeValidators, SimpleValidator } from '@wildberries/validators';

// i18n
const REQUIRED_ERROR_TEXT = 'Поле должно быть заполнено.';
const MIN_LENGTH_ERROR_TEXT = 'Длина поля должна быть не менее 10 символов.';

const MIN_DESCRIPTION_LENGTH = 10;

const simpleValidator = new SimpleValidator();

export const addTaskFormValidations = {
  description: composeValidators([
    simpleValidator.requiredValidator(REQUIRED_ERROR_TEXT),
    simpleValidator.minLenghtValidate(
      MIN_DESCRIPTION_LENGTH,
      MIN_LENGTH_ERROR_TEXT,
    ),
  ]),
};
