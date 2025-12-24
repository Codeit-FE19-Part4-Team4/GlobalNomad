'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import BasicModal from './BasicModal';
import { useModal } from './useModal';

export default function ModalContainer() {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setModalRoot(document.getElementById('modal-root') as HTMLElement);
  }, []);
  const { activeModal } = useModal();
  if (!modalRoot || activeModal.length === 0) {
    return null;
  }
  const MODAL_COMPONENT: Record<string, React.ComponentType<any>> = {
    ['BasicModal']: BasicModal,
  };
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      {/*dim*/}
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10">
        {activeModal.map((modal) => {
          const Modal = MODAL_COMPONENT[modal.type];
          return <Modal {...modal.props} key={modal.id} />;
        })}
      </div>
    </div>,
    modalRoot
  );
}
