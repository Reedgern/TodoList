export type TaskItemType = {
  id: string;
  description: string;
  isCompleted: boolean;
  isLoading?: boolean;
  isEditMode?: boolean;
};

export type AddTaskFormValuesType = {
  description: string;
  isCompleted: boolean;
};

export type EditTaskFormSubmitParamsType = AddTaskFormValuesType & {
  id: string;
};
