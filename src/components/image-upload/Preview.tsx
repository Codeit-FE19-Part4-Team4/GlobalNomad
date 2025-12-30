'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import ic_delete from '@/assets/icons/activities/ic-image-delete.svg';

interface PreviewProps {
  image: File;
  title: string;
  onDelete: (image: File) => void;
}
export default function Preview({ image, title, onDelete }: PreviewProps) {
  const handleDelete = (image: File) => {
    onDelete(image);
  };
  const [url, setUrl] = useState<null | string>(null);

  useEffect(() => {
    const objectURL = URL.createObjectURL(image);
    setUrl(objectURL);

    return () => {
      URL.revokeObjectURL(objectURL);
    };
  }, [image]);

  if (!url) {
    return null;
  }

  return (
    <div className="relative rounded-2xl border border-gray-100">
      <div className="relative h-20 w-20 sm:h-[126px] sm:w-[126px]">
        <Image
          fill
          src={url}
          alt={`${title}`}
          className="h-[126px] w-[126px] rounded-2xl object-cover"
        />
      </div>
      <button
        onClick={() => handleDelete(image)}
        className="absolute top-[-4px] right-[-4px]">
        <Image src={ic_delete} alt="이미지 삭제" />
      </button>
    </div>
  );
}
