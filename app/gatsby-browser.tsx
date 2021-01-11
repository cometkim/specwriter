/* eslint-env browser */

import type { ReactElement } from 'react';
import type {} from 'react-dom/experimental';
import ReactDOM from 'react-dom';

import type { Callable } from '@cometjs/core';


export const replaceHydrateFunction = () => {
  return (element: ReactElement, container: Element, callback: Callable) => {
    ReactDOM.unstable_createRoot(container, {
      hydrate: true,
      hydrationOptions: { onHydrated: callback },
    }).render(element);
  };
};
