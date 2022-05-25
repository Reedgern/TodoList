import React from 'react';
import { IAction, RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@mihanizm56/redux-core-modules';
import { AppLayout } from '@/_layouts/app-layout';
import { ConnectedTasksPage } from '@/pages/todo/page';
import { storeInjectConfig } from '@/pages/todo/store-inject-config';

const pageNode = 'todo';

const action: IAction = async ({ toState }) => {
  return {
    title: 'Tasks',
    content: (
      <ReduxStoreLoader
        storeInjectConfig={storeInjectConfig()}
        toState={toState}
      >
        <AppLayout>
          <RouteNode nodeName={pageNode}>
            {({ route, content }) => {
              if (route.name === pageNode) {
                // ты сильно ограничил возможности страницы сделав там контейнер и завернув только один вью компонент в него
                // компонент страницы должен быть как можно проще чтобы его можно было дополнять и изменять
                // он должен содержать стили и компоненты, максимум допускается иметь мапстейт для отображения/не отображения чего то внутри
                return <ConnectedTasksPage />;
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
