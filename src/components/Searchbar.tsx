import Image from 'next/image';
import ic_search from '@/assets/icons/main/ic-search.svg';
import Button from './Button';
import Text from './Text';

interface SearchbarProps {
  title: string;
  placeholder: string;
}

export default function Searchbar({ title, placeholder }: SearchbarProps) {
  return (
    <div className="flex flex-col items-center gap-3 py-4 sm:gap-9 sm:px-10 sm:py-8">
      <Text className="sm:text-title-xl text-body-lg bold">{title}</Text>
      <div className="shadow-3xl bg-background relative w-full rounded-2xl sm:rounded-3xl">
        <Image
          src={ic_search}
          alt="검색 아이콘"
          className="absolute top-[14.5px] left-5 sm:top-[25px] sm:left-8"
        />
        <input
          placeholder={placeholder}
          className="h-[51px] w-full py-1.5 pr-2 pl-11 sm:h-[70px] sm:py-2.5 sm:pr-3 sm:pl-[66px]"
        />
        <Button
          variant="primary"
          size="lg"
          className="absolute right-3 bottom-1.5 h-[41px] w-[85px] sm:bottom-2.5 sm:h-[50px] sm:w-[120px]">
          검색하기
        </Button>
      </div>
    </div>
  );
}
