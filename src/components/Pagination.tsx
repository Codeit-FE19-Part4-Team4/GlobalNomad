'use client';
import Image from 'next/image';
import { useState } from 'react';

import PageButton from './PageButton';

import ic_page_off from '@/assets/icons/activities/ic-page-left-off.svg';
import ic_page from '@/assets/icons/activities/ic-page-left.svg';
import { cn } from '@/util/cn';

const PAGES_PER_GROUP = 5;

interface NavigationBtnProps {
  disabled: boolean;
  direction: 'prev' | 'next';
  onClick: () => void;
}

interface PaginationProps {
  totalPage: number;
  handleClickPage?: (page: number) => Promise<void>;
}

function NavigationBtn({ disabled, direction, onClick }: NavigationBtnProps) {
  return (
    <button
      className={cn('h-10 w-10', !disabled && 'cursor-pointer')}
      onClick={onClick}
      disabled={disabled}>
      <Image
        src={disabled ? ic_page_off : ic_page}
        alt={`${direction === 'prev' ? '이전' : '다음'} 페이지로 이동`}
        className={cn(direction === 'next' ? 'rotate-180' : '')}
      />
    </button>
  );
}

export default function Pagination({
  totalPage,
  handleClickPage,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const currentGroup = Math.ceil(currentPage / PAGES_PER_GROUP);

  if (totalPage === 0) return null;

  const startPage = (currentGroup - 1) * PAGES_PER_GROUP + 1;
  const endPage = Math.min(currentGroup * PAGES_PER_GROUP, totalPage);
  const curtPageGrpArray = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const handleClickNavBtn = (direction: 'prev' | 'next') => {
    const pageToNavigate =
      direction === 'prev' ? currentPage - 1 : currentPage + 1;
    if (pageToNavigate < 1 || pageToNavigate > totalPage) {
      return;
    }
    setCurrentPage(pageToNavigate);
    handleClickPage?.(pageToNavigate);
  };

  const onClickPage = (page: number) => {
    setCurrentPage(page);
    handleClickPage?.(page);
  };

  return (
    <div className="flex gap-1">
      <NavigationBtn
        disabled={currentPage === 1}
        direction="prev"
        onClick={() => handleClickNavBtn('prev')}
      />
      {curtPageGrpArray.map((page) => (
        <PageButton
          key={page}
          page={page}
          isClicked={currentPage === page}
          onClick={() => onClickPage(page)}
        />
      ))}
      <NavigationBtn
        disabled={currentPage === totalPage}
        direction="next"
        onClick={() => handleClickNavBtn('next')}
      />
    </div>
  );
}
