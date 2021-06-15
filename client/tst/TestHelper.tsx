import React from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {ReactNode} from 'react';
import {ReactElement} from 'react';
import {ReactChild} from 'react';

const history = createBrowserHistory();

interface DEVICE_WIDTHS {
  readonly DESKTOP: number;
  readonly MOBILE: number;
  readonly TABLET: number;
}

// Widths in Pixels. Aligns with Media Query widths
export const DEVICE_TYPES: DEVICE_WIDTHS = {
  DESKTOP: 1000,
  MOBILE: 750,
  TABLET: 800,
};

export const routeWrapper = (
  children: React.ReactChild,
): ReactElement<(children: ReactChild) => ReactNode> => {
  return <Router history={history}>{children}</Router>;
};
