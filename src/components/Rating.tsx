import Image from 'next/image';

import IcStarOff from '@/assets/icons/main/ic-star-off.svg';
import IcStarOn from '@/assets/icons/main/ic-star-on.svg';

type RatingProps = {
  size: 'lg' | 'md' | 'sm';
  value: number;
  onChange?: (value: number) => void;
};

const RATING_STYLE = {
  lg: { iconSize: 42, gap: 'gap-2' },
  md: { iconSize: 36, gap: 'gap-2' },
  sm: { iconSize: 18, gap: 'gap-0.5' },
};

const STARS = [1, 2, 3, 4, 5] as const;

/**
 * 별점 입력/표시 컴포넌트
 *
 * - size: 별 크기 (lg | md | sm)
 * - value: 현재 별점 (0-5)
 * - onChange: 별점 변경 핸들러 (없으면 readonly), 같은 별 재클릭 시 0점으로 리셋
 *
 * @example
 * <Rating size='lg' value={rating} onChange={setRating} /> 👉🏻 별점 선택
 * <Rating size='sm' value={5} /> 👉🏻 별점 표시
 */
export default function Rating({ size, value, onChange }: RatingProps) {
  const { iconSize, gap } = RATING_STYLE[size];
  const iconProps = { width: iconSize, height: iconSize };
  const interactiveStyle = 'cursor-pointer hover:scale-105 active:scale-95';

  return (
    <div className={`flex ${gap}`}>
      {STARS.map((star) => {
        const icon = (
          <Image
            src={star <= value ? IcStarOn : IcStarOff}
            alt=""
            className="pointer-events-none"
            {...iconProps}
          />
        );

        // onChange 유무에 따라 클릭 가능한 버튼 또는 표시 전용
        return onChange ? (
          <button
            key={star}
            type="button"
            aria-label={`${star}점`}
            className={interactiveStyle}
            onClick={() => onChange(star === value ? 0 : star)}>
            {icon}
          </button>
        ) : (
          <span key={star}>{icon}</span>
        );
      })}
    </div>
  );
}
