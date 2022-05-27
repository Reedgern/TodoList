import { appNamespace } from '@/_constants/i18next/app-namespace';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo/_constants';

export const TASKS_PAGE_TEXTS = {
  addFormTitle: 'Создание новой таски',
  addTaskFormModalButtonText: 'Добавить новую таску',
  removeButtonText: 'Удалить',
  editButtonText: 'Редактировать',
  cancelButtonText: 'Отменить',
  submitFormButtonText: 'Сохранить',
  noTasksMessage: 'На данный момент нет ни одной таски...',
  editModeTaskTitle: 'Режим редактирования',
  viewModeTaskTitle: 'Информация о таске',
};

export const TASKS_PAGE_TRANSLATIONS = {
  addFormTitle: `${appNamespace}:${PAGE_SUB_NAMESPACE}.addFormTitle`,
  addTaskFormModalButtonText: `${appNamespace}:${PAGE_SUB_NAMESPACE}.addTaskFormModalButtonText`,
  removeButtonText: `${appNamespace}:${PAGE_SUB_NAMESPACE}.removeButtonText`,
  editButtonText: `${appNamespace}:${PAGE_SUB_NAMESPACE}.editButtonText`,
  cancelButtonText: `${appNamespace}:${PAGE_SUB_NAMESPACE}.cancelButtonText`,
  submitFormButtonText: `${appNamespace}:${PAGE_SUB_NAMESPACE}.submitFormButtonText`,
  noTasksMessage: `${appNamespace}:${PAGE_SUB_NAMESPACE}.noTasksMessage`,
  editModeTaskTitle: `${appNamespace}:${PAGE_SUB_NAMESPACE}.editModeTaskTitle`,
  viewModeTaskTitle: `${appNamespace}:${PAGE_SUB_NAMESPACE}.viewModeTaskTitle`,
};
