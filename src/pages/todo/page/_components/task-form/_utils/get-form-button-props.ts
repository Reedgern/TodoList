import {
  GadgetsFloppyIcon,
  NavigationDeleteCircleIcon,
} from '@wildberries/ui-kit';
import { ButtonLinkPropsType } from '@wildberries/ui-kit/lib/button-link/button-link';
import { TASKS_PAGE_TEXTS } from '@/pages/todo/page/_constants/text';

type SaveButtonParamsType = {
  isMobile: boolean;
  invalid: boolean;
  isLoading: boolean;
};

type CancelButtonParamsType = {
  isMobile: boolean;
  isLoading: boolean;
  onClick: () => void;
};

// Filename!!!
export const getFormSaveButtonProps = ({
  invalid,
  isMobile,
  isLoading,
}: SaveButtonParamsType): ButtonLinkPropsType => {
  if (isMobile) {
    return {
      disabled: invalid || isLoading,
      isLoading,
      isTextCenter: true,
      rightIcon: GadgetsFloppyIcon,
      size: 'small',
      type: 'submit',
    };
  }

  return {
    disabled: invalid || isLoading,
    isLoading,
    isTextCenter: true,
    text: TASKS_PAGE_TEXTS.submitFormButtonText,
    size: 'small',
    type: 'submit',
  };
};

export const getFormCancelButtonProps = ({
  isMobile,
  isLoading,
  onClick,
}: CancelButtonParamsType): ButtonLinkPropsType => {
  if (isMobile) {
    return {
      disabled: isLoading,
      isLoading,
      isTextCenter: true,
      rightIcon: NavigationDeleteCircleIcon,
      size: 'small',
      type: 'submit',
      onClick,
    };
  }

  return {
    disabled: isLoading,
    isLoading,
    isTextCenter: true,
    onClick,
    text: TASKS_PAGE_TEXTS.cancelButtonText,
    size: 'small',
    type: 'submit',
  };
};
