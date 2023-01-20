import * as Popover from '@radix-ui/react-popover';
import * as Checkbox from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { ProgressBar } from './ProgressBar';
import { Check } from 'phosphor-react';
import dayjs from 'dayjs';
interface HabitDayProps {
  date: Date;
  amount?: number;
  completed?: number;
}

export function HabitDay({ date, amount = 0, completed = 0 }: HabitDayProps) {
  const weekDay = dayjs(date).format('dddd');
  const dateFormatted = dayjs(date).format('DD/MM');

  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('h-10 w-10 border-2 rounded-lg cursor-pointer', {
          'bg-zinc-900 border-zinc-800': completedPercentage === 0,
          'bg-violet-900 border-violet-700': completedPercentage > 0 && completedPercentage < 20,
          'bg-violet-800 border-violet-600': completedPercentage >= 20 && completedPercentage < 40,
          'bg-violet-700 border-violet-500': completedPercentage >= 40 && completedPercentage < 60,
          'bg-violet-600 border-violet-500': completedPercentage >= 60 && completedPercentage < 80,
          'bg-violet-500 border-violet-400': completedPercentage >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className='min-w-[320px] w-full p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <span className='font-semibold text-zinc-400'>
            {weekDay}
          </span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'>
            {dateFormatted}
          </span>

          <ProgressBar progress={completedPercentage} />

          <div className='mt-6 flex flex-col gap-3'>
            <Checkbox.Root
              className='flex items-center gap-3 group'
            >
              <div className='h-8 w-8 flex items-center justify-center rounded-lg  bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                <Checkbox.Indicator>
                  <Check className='text-white' size={20} />
                </Checkbox.Indicator>
              </div>
              <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
                Beber 2L de água
              </span>
            </Checkbox.Root>
          </div>
          <div className='mt-6 flex flex-col gap-3'>
            <Checkbox.Root
              className='flex items-center gap-3 group'
            >
              <div className='h-8 w-8 flex items-center justify-center rounded-lg  bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                <Checkbox.Indicator>
                  <Check className='text-white' size={20} />
                </Checkbox.Indicator>
              </div>
              <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
                Beber 2L de água
              </span>
            </Checkbox.Root>
          </div>
          <div className='mt-6 flex flex-col gap-3'>
            <Checkbox.Root
              className='flex items-center gap-3 group'
            >
              <div className='h-8 w-8 flex items-center justify-center rounded-lg  bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                <Checkbox.Indicator>
                  <Check className='text-white' size={20} />
                </Checkbox.Indicator>
              </div>
              <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
                Beber 2L de água
              </span>
            </Checkbox.Root>
          </div>
          <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}