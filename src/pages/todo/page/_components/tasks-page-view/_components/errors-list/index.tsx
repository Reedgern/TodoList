import React, { memo } from 'react';

type PropsType = {
  errors: string[];
};

export const ErrorsList = memo(({ errors }: PropsType) => {
  if (errors.length === 0) {
    // не допускается возврат null из компонента
    // компонент должен что то рендерить
    // если компонент не нужен - определять выше по дереву элементов
    return null;
  }

  return (
    <div>
      {errors.map((error, index) => (
        <div key={index}>{error}</div>
      ))}
    </div>
  );
});
