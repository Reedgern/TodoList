import i18next from 'i18next';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';

export const getTaskTitle = (isEditMode) => {
  const titleToTranslate = isEditMode
    ? TASKS_PAGE_TRANSLATIONS.editModeTaskTitle
    : TASKS_PAGE_TRANSLATIONS.viewModeTaskTitle;

  return i18next.t(titleToTranslate);
};
