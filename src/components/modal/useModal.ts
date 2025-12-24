'use client';

import { useContext } from 'react';

import { ModalDispatchContext, ModalStateContext } from './modal-context';
// import type { OpenModalParams } from './modal-type';

export const useModal = () => {
  const activeModal = useContext(ModalStateContext);
  const { open: openModal, close: closeModal } =
    useContext(ModalDispatchContext);

  // const openModal = ({ type, props }: OpenModalParams) => {
  //   open({ type, props });
  //   console.log('open-modal', activeModal);
  // };

  // const closeModal = (type: string) => {
  //   close(type);
  // };

  return { activeModal, openModal, closeModal };
};
