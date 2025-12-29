'use client';

import Image from 'next/image';
import { forwardRef } from 'react';

import { CATEGORY_ICON, type FilterCategoryType } from './filter-category';
import { filterStyle } from './filter.cva';

interface FilterProps {
  /** 선택 상태 */
  selected?: boolean;
  /** 버튼 사이즈 */
  size?: 'lg' | 'sm';
  /** 카테고리 (아이콘 표시용) */
  category?: FilterCategoryType;
  /** 클릭 핸들러 */
  onClick?: () => void;
  /** 버튼 라벨 */
  children: React.ReactNode;
}

/**
 * 필터 컴포넌트
 *
 * @example
 * <Filter category='문화·예술'>문화·예술</Filter> 👉🏻 카테고리 필터 (아이콘 + 텍스트)
 *
 * @example
 * <Filter category='식음료' size='sm'>식음료</Filter> 👉🏻 작은 사이즈 카테고리 필터
 *
 * @example
 * <Filter selected>예약 승인</Filter> 👉🏻 상태 필터 (아이콘 없음)
 */
const Filter = forwardRef<HTMLButtonElement, FilterProps>(
  ({ children, selected = false, size = 'lg', category, onClick }, ref) => {
    const icon = category && CATEGORY_ICON[category];

    return (
      <button
        ref={ref}
        type="button"
        className={filterStyle({ selected, size })}
        onClick={onClick}>
        {icon && (
          <Image
            src={selected ? icon.active : icon.default}
            alt=""
            width={24}
            height={24}
          />
        )}
        {children}
      </button>
    );
  }
);

Filter.displayName = 'Filter';

export default Filter;
