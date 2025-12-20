/**
 * 예약 상태를 표시하는 StatusBadge 컴포넌트
 *
 * @example
 * <StatusBadge status="pending" /> 👉🏻 기본 상태
 * <StatusBadge status={reservation.status} /> 👉🏻 서버에서 받은 상태 값
 * <StatusBadge status="confirmed" className="ml-2" /> 👉🏻 스타일 추가
 */

import { cn } from '@/util/cn';
import { STATUS_BADGE_BASE, STATUS_BADGE } from './statusBadge.constants';

// 예약 상태 타입
export type ReservationBadge =
  | 'pending'
  | 'confirmed'
  | 'completed'
  | 'declined'
  | 'canceled';

// 컴포넌트 props
interface StatusBadgeProps {
  status: ReservationBadge; // 예약 상태
  className?: string; // 추가 스타일
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  const badge = STATUS_BADGE[status];

  return (
    <span className={cn(STATUS_BADGE_BASE, badge.className, className)}>
      {badge.label}
    </span>
  );
}
