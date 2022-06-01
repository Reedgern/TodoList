import { composeValidators, SimpleValidator } from '@wildberries/validators';
import i18next from 'i18next';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';

const REQUIRED_ERROR_TEXT = i18next.t(
  TASKS_PAGE_TRANSLATIONS.requiredFieldErrorText,
);
const MIN_LENGTH_ERROR_TEXT = i18next.t(
  TASKS_PAGE_TRANSLATIONS.minLengthFieldErrorText,
);

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
