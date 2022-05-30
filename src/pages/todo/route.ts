import { appNamespace } from '@/_constants/i18next/app-namespace';

export default {
  name: 'todo',
  path: '/todo',
  loadAction: () => import('./index'),
  // uncomment if you need translations
  i18n: {
    namespaces: [appNamespace],
  },
};
