import { appNamespace } from '@/_constants/i18next/app-namespace';
import {
  NOTIFICATIONS_SUB_NAMESPACE,
  PAGE_SUB_NAMESPACE,
} from '@/pages/todo/_constants';

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
  formSubmitErrorModalTitle: `${appNamespace}:${NOTIFICATIONS_SUB_NAMESPACE}.form-submit-error-title`,
  fetchTasksErrorModalTitle: `${appNamespace}:${NOTIFICATIONS_SUB_NAMESPACE}.fetch-tasks-error-title`,
  addTaskErrorModalTitle: `${appNamespace}:${NOTIFICATIONS_SUB_NAMESPACE}.add-task-error-title`,
  updateTaskErrorModalTitle: `${appNamespace}:${NOTIFICATIONS_SUB_NAMESPACE}.update-task-error-title`,
  updateTaskSuccessModalText: `${appNamespace}:${NOTIFICATIONS_SUB_NAMESPACE}.update-task-success-text`,
  deleteTaskErrorModalTitle: `${appNamespace}:${NOTIFICATIONS_SUB_NAMESPACE}.delete-task-error-title`,
  deleteTaskSuccessModalText: `${appNamespace}:${NOTIFICATIONS_SUB_NAMESPACE}.delete-task-success-text`,
  taskFormDescriptionLabel: `${appNamespace}:${PAGE_SUB_NAMESPACE}.form.field-labels.description`,
  taskFormIsCompletedLabel: `${appNamespace}:${PAGE_SUB_NAMESPACE}.form.field-labels.is-completed`,
  requiredFieldErrorText: `${appNamespace}:${PAGE_SUB_NAMESPACE}.form.validation-errors.required`,
  minLengthFieldErrorText: `${appNamespace}:${PAGE_SUB_NAMESPACE}.form.validation-errors.min-length`,
};
