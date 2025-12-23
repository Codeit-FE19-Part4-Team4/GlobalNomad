'use client';
import { useContext } from 'react';

import { ModalDispatchContext } from './modal-context';
import type { ActiveModalType } from './modal-type';

export const useModal = () => {
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = ({ Component, props }: ActiveModalType) => {
    open({ Component, props });
  };

  const closeModal = (Component: React.ReactNode) => {
    close(Component);
  };

  return { openModal, closeModal };
};
