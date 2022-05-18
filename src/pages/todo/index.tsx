import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import {
  injectAsyncReducer,
  injectAsyncSaga,
} from '@mihanizm56/redux-core-modules';
import { AppLayout } from '@/_layouts/app-layout';
import reducerTodo, {
  MODULE_REDUCER_NAME as reducerTodoName,
} from '@/_redux/todoTasks';
import { ConnectedTodoListPage } from '@/pages/todo/page';
import { fetchTodoTasksWatcherSaga } from '@/_redux/todoTasks/sagas';

const pageNode = 'todo';

const action = async ({ store }) => {
  injectAsyncReducer({
    store,
    name: reducerTodoName,
    reducer: reducerTodo,
  });

  injectAsyncSaga({
    store,
    name: 'TODO_SAGA',
    saga: fetchTodoTasksWatcherSaga,
  });

  return {
    title: 'Todo',
    content: (
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
    ),
  };
};

export default action;
