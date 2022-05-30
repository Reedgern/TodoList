import {
  GadgetsFloppyIcon,
  NavigationDeleteCircleIcon,
} from '@wildberries/ui-kit';
import { ButtonLinkPropsType } from '@wildberries/ui-kit/lib/button-link/button-link';
import i18next from 'i18next';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';

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
    text: i18next.t(TASKS_PAGE_TRANSLATIONS.submitFormButtonText),
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
      isTextCenter: true,
      rightIcon: NavigationDeleteCircleIcon,
      size: 'small',
      type: 'submit',
      onClick,
    };
  }

  return {
    disabled: isLoading,
    isTextCenter: true,
    onClick,
    text: i18next.t(TASKS_PAGE_TRANSLATIONS.cancelButtonText),
    size: 'small',
    type: 'submit',
  };
};
