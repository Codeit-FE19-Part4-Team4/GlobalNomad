import StatusBadge from '@/components/StatusBadge/StatusBadge';
import Text from '@/components/Text';

export default function TestPage() {
  return (
    <div className="space-y-4 p-10">
      <Text as="h2" className="mb-6 text-2xl font-bold">
        StatusBadge 테스트
      </Text>

      <div className="flex flex-wrap gap-4">
        <StatusBadge status="pending" />
        <StatusBadge status="confirmed" />
        <StatusBadge status="completed" />
        <StatusBadge status="declined" />
        <StatusBadge status="canceled" />
      </div>
    </div>
  );
}
