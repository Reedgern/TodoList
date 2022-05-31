import { BasicPencilEditIcon, BasicTrashIcon } from '@wildberries/ui-kit';
import { ButtonLinkPropsType } from '@wildberries/ui-kit/lib/button-link/button-link';

type EditButtonParamsType = {
  isLoading: boolean;
  onClick: () => void;
};

type RemoveButtonParamsType = {
  isLoading: boolean;
  onClick: () => void;
};

export const getTaskEditButtonProps = ({
  onClick,
  isLoading,
}: EditButtonParamsType): ButtonLinkPropsType => {
  return {
    disabled: isLoading,
    isLoading,
    notFullWidthOnMobile: true,
    onClick,
    rightIcon: BasicPencilEditIcon,
    size: 'small',
    type: 'button',
    variant: 'add',
  };
};

export const getRemoveButtonProps = ({
  isLoading,
  onClick,
}: RemoveButtonParamsType): ButtonLinkPropsType => {
  return {
    disabled: isLoading,
    notFullWidthOnMobile: true,
    onClick,
    rightIcon: BasicTrashIcon,
    size: 'small',
    type: 'button',
    variant: 'remove',
  };
};
