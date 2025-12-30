'use client';
import { useState } from 'react';

import Text from '../Text';

import ImageForm from './ImageForm';
import Preview from './Preview';

interface ImageProps {
  file: File;
  id: string;
}

export default function UploadImageList({
  children: title,
  maxImages,
}: {
  children: string;
  maxImages: number;
}) {
  const [images, setImages] = useState<ImageProps[]>([]);

  const handleChangeImgForm = (files: FileList) => {
    const newImage = [...files].map((file) => ({
      id: crypto.randomUUID(),
      file,
    }));
    setImages((prev) => {
      return [...prev, ...newImage];
    });
  };

  const handleDeleteImage = (image: File) => {
    setImages((prev) => {
      return prev.filter((file) => file.file !== image);
    });
  };

  return (
    <div className="flex flex-col gap-2.5">
      <Text as="label" size={'body-lg'} className="bold">
        {title}
      </Text>
      <div className="flex gap-3 sm:gap-[14px]">
        <ImageForm
          imgCount={images.length}
          onChange={handleChangeImgForm}
          maxImages={maxImages}
        />
        <div className="flex gap-3 sm:gap-[14px]">
          {images.length > 0 &&
            images.map((image) => {
              return (
                <Preview
                  key={image.id}
                  image={image.file}
                  title={title}
                  onDelete={handleDeleteImage}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
