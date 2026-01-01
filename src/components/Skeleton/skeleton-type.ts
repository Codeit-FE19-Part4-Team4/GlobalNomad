/**
 * CardSkeleton 관련 타입 정의
 *
 * 로딩 상태에서 실제 Card 컴포넌트의 레이아웃을 그대로 재현하기 위해
 * card / list 타입을 구분하여 사용합니다.
 */

// 스켈레톤이 따라야 할 카드 레이아웃 타입
export type SkeletonType = 'card' | 'list';

// CardSkeleton 컴포넌트 props
export interface SkeletonProps {
  type?: SkeletonType;
  className?: string;
}
