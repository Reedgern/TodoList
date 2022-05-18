import React from 'react';
import { IAction, RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@mihanizm56/redux-core-modules';
import { AppLayout } from '@/_layouts/app-layout';
import { ConnectedTodoListPage } from '@/pages/todo/page';
import { storeInjectConfig } from '@/pages/todo/store-inject-config';

const pageNode = 'todo';

const action: IAction = async ({ store, toState }) => {
  return {
    title: 'Tasks',
    content: (
      <ReduxStoreLoader
        storeInjectConfig={storeInjectConfig(toState)}
        toState={toState}
      >
        <AppLayout>
          <RouteNode nodeName={pageNode}>
            {({ route, content }) => {
              if (route.name === pageNode) {
                return <ConnectedTodoListPage />;
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
