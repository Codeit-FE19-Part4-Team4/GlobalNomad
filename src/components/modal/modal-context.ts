'use client';
import { createContext } from 'react';

import { type ActiveModalType } from './modal-type';

type ModalStateContextType = ActiveModalType[];

type ModalDispatchContextType = {
  open: ({ Component, props }: ActiveModalType) => void;
  close: (Component: React.ReactNode) => void;
};

export const ModalStateContext = createContext([] as ModalStateContextType);

export const ModalDispatchContext = createContext(
  {} as ModalDispatchContextType
);
