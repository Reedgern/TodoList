import { appNamespace } from '@/_constants/i18next/app-namespace';

export default {
  name: 'todo',
  path: '/todo',
  loadAction: () => import('./index'),
  i18n: {
    namespaces: [appNamespace],
  },
};
