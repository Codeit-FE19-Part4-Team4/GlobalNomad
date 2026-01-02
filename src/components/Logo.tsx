import { cva } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';

import textLogo from '@/assets/images/common/img-logo-text.svg';
import logo from '@/assets/images/common/img-logo.svg';
import { cn } from '@/util/cn';

const LogoStyle = cva('flex w-fit items-center', {
  variants: {
    size: {
      lg: 'flex-col gap-6',
      sm: 'gap-3 ',
    },
  },
});

export default function Logo({ size }: { size: 'lg' | 'sm' }) {
  return (
    <h1>
      <Link
        href="/"
        className={cn(LogoStyle({ size }))}
        aria-label="Global Nomad">
        <Image
          src={logo}
          alt=""
          className={cn(
            size === 'lg'
              ? 'h-[105px] w-[105px] md:h-[144px] md:w-[144px]'
              : 'h-7 w-7'
          )}
        />
        <Image
          src={textLogo}
          alt="Global Nomad"
          className={cn(
            size === 'lg'
              ? 'h-[23px] w-[187px] md:h-[31px] md:w-[255px]'
              : 'hidden md:block md:h-4 md:w-[134px]'
          )}
        />
      </Link>
    </h1>
  );
}
