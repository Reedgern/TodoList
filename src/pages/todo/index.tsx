import React from 'react';
import { IAction, RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@mihanizm56/redux-core-modules';
import { AppLayout } from '@/_layouts/app-layout';
import { Page } from '@/pages/todo/page';
import { storeInjectConfig } from '@/pages/todo/store-inject-config';
import { appNamespace } from '@/_constants/i18next/app-namespace';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo/_constants';

const pageNode = 'todo';

const action: IAction = async ({ fromState, toState, store }) => {
  return {
    i18n: [appNamespace],
    title: `${appNamespace}:${PAGE_SUB_NAMESPACE}.page-title`,
    content: (
      <ReduxStoreLoader
        fromState={fromState}
        storeInjectConfig={storeInjectConfig()}
        toState={toState}
      >
        <AppLayout>
          <RouteNode nodeName={pageNode}>
            {({ route, content }) => {
              if (route.name === pageNode) {
                return <Page />;
              }

              return content;
            }}
          </RouteNode>
        </AppLayout>
      </ReduxStoreLoader>
    ),
  };
};

export default action;
