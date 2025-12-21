'use client';
import { useState } from 'react';

import { type ReservedSchedule } from '@/types/reserved-schedule';
import { cn } from '@/util/cn';

interface TabPropsType {
  data: ReservedSchedule;
  onClick?: (status: '신청' | '승인' | '거절') => void;
}
interface TabDataType {
  id: number;
  status: '신청' | '승인' | '거절';
  count: number;
}
/**
 * props의 data는
 * GET /my-activities/{activityId}/reserved-schedule
 * 응답을 그대로 사용합니다.
 */
export default function Tab({ data, onClick }: TabPropsType) {
  const tabData: TabDataType[] = [
    { id: 1, status: '신청', count: data.count.pending },
    { id: 2, status: '승인', count: data.count.confirmed },
    { id: 3, status: '거절', count: data.count.declined },
  ];
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <div className="flex justify-start">
      {tabData.map((tab) => (
        <button
          type="button"
          key={tab.id}
          className={cn(
            'flex flex-1 justify-center gap-1 border-b px-3.5 py-[11px]',
            tab.id === activeTab
              ? 'border-primary-500 text-primary-500'
              : 'border-gray-100'
          )}
          onClick={() => {
            onClick?.(tab.status);
            setActiveTab(tab.id);
          }}>
          <span
            className={cn(
              'text-[16px]',
              activeTab === tab.id ? 'font-bold' : 'font-normal'
            )}>
            {tab.status}
          </span>
          <span
            className={cn(
              'text-[16px]',
              activeTab === tab.id ? 'font-bold' : 'font-normal'
            )}>
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
}
