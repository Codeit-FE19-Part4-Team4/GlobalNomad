'use client';
import BasicModal from '@/components/modal/BasicModal';
// import { useModal } from '@/components/modal/useModal';
import { useModal } from '@/components/modal/useModal';
import Text from '@/components/Text';
export default function TestPage() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div className="space-y-4 p-10">
      <Text as="h2" className="mb-6 text-2xl font-bold">
        Global Nomad
      </Text>
      <button onClick={openModal}>클릭!</button>
      {isOpen && (
        <BasicModal buttonText="확인" onClick={closeModal}>
          등록완료
        </BasicModal>
      )}
    </div>
  );
}
