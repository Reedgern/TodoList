import { BasicPencilEditIcon, BasicTrashIcon } from '@wildberries/ui-kit';
import { ButtonLinkPropsType } from '@wildberries/ui-kit/lib/button-link/button-link';

type TaskButtonPropsType = {
  isLoading: boolean;
  onClick: () => void;
  type: 'edit' | 'remove';
};

export const getTaskButtonProps = ({
  isLoading,
  onClick,
  type,
}: TaskButtonPropsType): ButtonLinkPropsType => {
  const rightIcon = type === 'remove' ? BasicTrashIcon : BasicPencilEditIcon;
  const variant = type === 'remove' ? 'remove' : 'add';

  return {
    disabled: isLoading,
    notFullWidthOnMobile: true,
    onClick,
    rightIcon,
    size: 'small',
    type: 'button',
    variant,
  };
};
