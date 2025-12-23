import type { JSX } from 'react';

export interface ActiveModalType<TProps = unknown> {
  Component: JSX.Element;
  props: TProps;
}
