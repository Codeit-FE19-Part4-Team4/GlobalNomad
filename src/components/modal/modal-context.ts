import { createContext } from 'react';

import { type ModalStateType, type OpenModalParams } from './modal-type';
type ModalStateContextType = ModalStateType[];

type ModalDispatchContextType = {
  open: ({ type, props }: OpenModalParams) => void;
  close: (type: React.ComponentType<any>) => void;
};

export const ModalStateContext = createContext<
  undefined | ModalStateContextType
>(undefined);
export const ModalDispatchContext = createContext<
  undefined | ModalDispatchContextType
>(undefined);
