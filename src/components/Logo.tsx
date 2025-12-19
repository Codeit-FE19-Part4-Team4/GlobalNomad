import Image from 'next/image';
import textLogo from '@/assets/images/common/img-logo-text.svg';
import logo from '@/assets/images/common/img-logo.svg';

export default function Logo({ size }: { size: string }) {
  return (
    <div className="">
      <Image src={logo} alt="로고" className={size} />
      <Image src={textLogo} alt="global nomad" />
    </div>
  );
}
