import React, { memo } from 'react';

type PropsType = {
  errors: string[];
};

export const ErrorsList = memo(({ errors }: PropsType) => {
  if (errors.length === 0) {
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
