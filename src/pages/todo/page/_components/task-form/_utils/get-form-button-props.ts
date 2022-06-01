import {
  GadgetsFloppyIcon,
  NavigationDeleteCircleIcon,
} from '@wildberries/ui-kit';
import { ButtonLinkPropsType } from '@wildberries/ui-kit/lib/button-link/button-link';
import i18next from 'i18next';
import { TASKS_PAGE_TRANSLATIONS } from '@/pages/todo/page/_constants/translations';

type SaveButtonParamsType = {
  isMobile: boolean;
  isLoading: boolean;
};

type CancelButtonParamsType = {
  isMobile: boolean;
  isLoading: boolean;
  onClick: () => void;
};

export const getFormSaveButtonProps = ({
  isMobile,
  isLoading,
}: SaveButtonParamsType): ButtonLinkPropsType => {
  const baseButtonProps: ButtonLinkPropsType = {
    disabled: isLoading,
    isLoading,
    isTextCenter: true,
    size: 'small',
    type: 'submit',
  };

  if (isMobile) {
    return {
      ...baseButtonProps,
      rightIcon: GadgetsFloppyIcon,
    };
  }

  return {
    ...baseButtonProps,
    text: i18next.t(TASKS_PAGE_TRANSLATIONS.submitFormButtonText),
  };
};

export const getFormCancelButtonProps = ({
  isMobile,
  isLoading,
  onClick,
}: CancelButtonParamsType): ButtonLinkPropsType => {
  const baseButtonProps: ButtonLinkPropsType = {
    disabled: isLoading,
    isTextCenter: true,
    size: 'small',
    type: 'submit',
    onClick,
  };

  if (isMobile) {
    return {
      ...baseButtonProps,
      rightIcon: NavigationDeleteCircleIcon,
    };
  }

  return {
    ...baseButtonProps,
    text: i18next.t(TASKS_PAGE_TRANSLATIONS.cancelButtonText),
  };
};
