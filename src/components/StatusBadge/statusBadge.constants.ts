/**
 * StatusBadge에서 사용하는 상수 정의 파일
 *
 * Badge의 공통 스타일과
 * 예약 상태별 라벨 / 색상을 관리합니다.
 *
 * 👉 디자인 수정은 이 파일에서만 진행합니다.
 */

// Badge에 공통으로 적용되는 텍스트 스타일
const STATUS_BADGE_TEXT = 'bold body-lg';

// Badge 기본 레이아웃 스타일
export const STATUS_BADGE_BASE = `inline-flex items-center px-3 py-1 rounded-lg ${STATUS_BADGE_TEXT}`;

// 예약 상태별 Badge 설정
export const STATUS_BADGE = {
  pending: {
    label: '예약완료',
    className: 'bg-green-100 text-green-500',
  },
  confirmed: {
    label: '예약승인',
    className: 'bg-mint-100 text-mint-500',
  },
  completed: {
    label: '체험완료',
    className: 'bg-primary-100 text-primary-500',
  },
  declined: {
    label: '예약거절',
    className: 'bg-red-100 text-red-500',
  },
  canceled: {
    label: '예약취소',
    className: 'bg-gray-100 text-gray-600',
  },
};
