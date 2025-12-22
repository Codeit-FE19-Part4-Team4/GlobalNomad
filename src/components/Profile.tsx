'use client';
/* eslint-disable @next/next/no-img-element */

import { cva } from 'class-variance-authority';
import { useState } from 'react';

import { cn } from '@/util/cn';

const profileVariants = cva('rounded-full object-cover', {
  variants: {
    size: {
      lg: 'w-[120px] h-[120px]',
      md: 'w-[70px] h-[70px]',
      sm: 'w-[30px] h-[30px]',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

interface ProfileProps {
  src?: string;
  alt?: string;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
  fallbackSrc?: string;
}

export default function Profile({
  src,
  alt = 'profile',
  size,
  className,
  fallbackSrc = '/icons/default-profile.svg',
}: ProfileProps) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
      className={cn(profileVariants({ size }), className)}
    />
  );
}
