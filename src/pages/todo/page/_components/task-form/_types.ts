import { FormApi } from 'final-form';

// FormValuesType ни о чем не говорит
export type FormValuesType = { description: string; isCompleted: boolean };
// FormType ни о чем не говорит
export type FormType = FormApi<FormValuesType>;
// FormSubmitCallbackType ни о чем не говорит
export type FormSubmitCallbackType = (
  values: FormValuesType,
  form: FormType,
) => void;

// не надо выносить в отдельные типы/константы то, что юзается только в одном месте. но есть исключения
