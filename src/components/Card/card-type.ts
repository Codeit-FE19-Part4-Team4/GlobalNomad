export type cardType = 'card' | 'list';
export type experienceStatusType =
  | 'pending'
  | 'confirmed'
  | 'completed'
  | 'declined'
  | 'canceled';
export interface ExperienceCard {
  id: number;
  title: string;
  price: number;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
}
export interface ExperienceCardProps {
  type?: cardType;
  item: ExperienceCard;
  className?: string;
}
export interface ExperienceManageCardProps {
  type?: cardType;
  item: ExperienceCard;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}
export interface ReservationCard {
  id: number;
  activity: activityType;
  totalPrice: number;
  date: string;
  startTime: string;
  endTime: string;
  headCount: number;
  status: experienceStatusType;
  reviewSubmitted: boolean;
}

export type activityType = {
  title: string;
  bannerImageUrl: string;
};

export interface ReservationCardProps {
  type?: cardType;
  item: ReservationCard;
  onReviewSubmit?: (id: number) => void;
  onReserveCancel?: (id: number) => void;
}
