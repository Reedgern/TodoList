import { PureRestRequest } from '@mihanizm56/fetch-api';
import Joi from 'joi';

type ParamsType = {
  endpoint: string;
};

const REQUEST_TIMEOUT = 30000;

export const i18nextRequest = ({ endpoint }: ParamsType) => {
  return new PureRestRequest().getRequest({
    extraValidationCallback: () => true,
    endpoint: 'http://localhost:8081/I18N',
    parseType: 'json',
    customTimeout: REQUEST_TIMEOUT,
    responseSchema: Joi.object({
      translate: Joi.object(),
    }),
    isErrorTextStraightToOutput: true,
    retry: 3,
  });
};
