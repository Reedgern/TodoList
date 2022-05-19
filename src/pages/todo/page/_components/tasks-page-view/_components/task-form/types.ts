import { FormApi } from 'final-form';

export type FormValuesType = { description: string; isCompleted: boolean };
export type FormType = FormApi<FormValuesType>;
export type FormSubmitCallbackType = (
  values: FormValuesType,
  form: FormType,
) => void;
