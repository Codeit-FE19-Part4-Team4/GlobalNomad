import RatingSummary from '@/components/RatingSummary';
import Text from '@/components/Text';
export default function TestPage() {
  const rating = 4.9;
  const reviewCount = 108;
  return (
    <div className="space-y-4 p-10">
      <Text as="h2" className="mb-6 text-2xl font-bold">
        Global Nomad
      </Text>
      <RatingSummary rating={rating} reviewCount={reviewCount} />
    </div>
  );
}
