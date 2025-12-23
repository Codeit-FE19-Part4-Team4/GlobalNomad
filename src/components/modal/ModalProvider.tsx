'use client';
import { useState, useMemo } from 'react';

import { ModalDispatchContext, ModalStateContext } from './modal-context';
import { type ActiveModalType } from './modal-type';

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeModal, setActiveModal] = useState<ActiveModalType[]>([]);

  const open = ({ Component, props }: ActiveModalType) => {
    setActiveModal((activeModal) => {
      return [...activeModal, { Component, props }];
    });
  };

  const close = (Component: React.ReactNode) => {
    setActiveModal((activeModal) => {
      return activeModal.filter((modal) => modal.Component !== Component);
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);
  return (
    <ModalDispatchContext value={dispatch}>
      <ModalStateContext value={activeModal}>{children}</ModalStateContext>
    </ModalDispatchContext>
  );
}
