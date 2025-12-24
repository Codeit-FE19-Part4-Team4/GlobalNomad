'use client';
import { useState } from 'react';

import { ModalDispatchContext, ModalStateContext } from './modal-context';
import type { ModalStateType, OpenModalParams } from './modal-type';
export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeModal, setActiveModal] = useState<ModalStateType[]>([]);

  const open = <TProps extends Record<string, unknown>>({
    type,
    props,
  }: OpenModalParams<TProps>) => {
    const id = Math.random();
    setActiveModal((activeModal) => {
      return [...activeModal, { type, props, id } as ModalStateType];
    });
    console.log('open', activeModal);
  };

  const close = (type: string) => {
    setActiveModal((activeModal) =>
      activeModal.filter((modal) => modal.type !== type)
    );
  };

  return (
    <ModalDispatchContext.Provider value={{ open, close }}>
      <ModalStateContext.Provider value={activeModal}>
        {children}
      </ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
}
