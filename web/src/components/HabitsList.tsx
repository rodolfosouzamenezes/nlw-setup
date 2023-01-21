import { Check } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import dayjs from 'dayjs';

interface HabitsInfo {
  possibleHabits: {
    id: string;
    title: string;
    created_at: string;
  }[];
  completedHabits: string[];
}

interface HabitsListProps {
  date: Date;
}

export function HabitsList({ date }: HabitsListProps) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>()
  useEffect(() => {
    api.get('/day', {
      params: {
        date: date.toISOString()
      }
    }).then((response) => {
      setHabitsInfo(response.data)
    })
  }, [])

  const isDateInPast = dayjs(date)
    .endOf('day')
    .isBefore(new Date())

  return (
    <div className='mt-6 flex flex-col gap-3'>

      {habitsInfo?.possibleHabits.map(habit => {
        return (
          <Checkbox.Root
            key={habit.id}
            checked={habitsInfo.completedHabits.includes(habit.id)}
            disabled={isDateInPast}
            className='flex items-center gap-3 group'
          >
            <div className='h-8 w-8 flex items-center justify-center rounded-lg  bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
              <Checkbox.Indicator>
                <Check className='text-white' size={20} />
              </Checkbox.Indicator>
            </div>
            <span className='font-semibold text-xl first-letter:capitalize text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
              {habit.title}
            </span>
          </Checkbox.Root>
        )
      })}

    </div>
  )
}