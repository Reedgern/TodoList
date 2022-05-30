import { appNamespace } from '@/_constants/i18next/app-namespace';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo/_constants';

export const TASKS_PAGE_TRANSLATIONS = {
  addFormTitle: `${appNamespace}:${PAGE_SUB_NAMESPACE}.form.title`,
  addTaskFormModalButtonText: `${appNamespace}:${PAGE_SUB_NAMESPACE}.form.open-modal-button`,
  removeButtonText: `${appNamespace}:${PAGE_SUB_NAMESPACE}.form.buttons.delete`,
  editButtonText: `${appNamespace}:${PAGE_SUB_NAMESPACE}.form.buttons.edit`,
  cancelButtonText: `${appNamespace}:${PAGE_SUB_NAMESPACE}.form.buttons.cancel`,
  submitFormButtonText: `${appNamespace}:${PAGE_SUB_NAMESPACE}.form.buttons.save`,
  noTasksMessage: `${appNamespace}:${PAGE_SUB_NAMESPACE}.empty-list-message`,
  editModeTaskTitle: `${appNamespace}:${PAGE_SUB_NAMESPACE}.task-edit-mode-title`,
  viewModeTaskTitle: `${appNamespace}:${PAGE_SUB_NAMESPACE}.task-view-mode-title`,
};
