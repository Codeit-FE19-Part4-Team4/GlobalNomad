'use client';

import { useState } from 'react';

import ScheduleForm from '@/components/ScheduleForm';
import { ScheduleBase } from '@/components/ScheduleForm/schedule-type';
const data = {
  schedules: [
    // {
    //   id: 1,
    //   date: '2023-12-01',
    //   startTime: '12:00',
    //   endTime: '13:00',
    // },
    // {
    //   id: 2,
    //   date: '2023-12-05',
    //   startTime: '12:00',
    //   endTime: '13:00',
    // },
  ],
};
export default function TestPage() {
  const [schedulesToAdd, setSchedulesToAdd] = useState<ScheduleBase[]>([]);
  const [scheduleIdsToRemove, setScheduleIdsToRemove] = useState<number[]>([]);
  return (
    <ScheduleForm
      initialSchedules={data.schedules}
      setSchedulesToAdd={setSchedulesToAdd}
      setScheduleIdsToRemove={setScheduleIdsToRemove}
    />
  );
}
