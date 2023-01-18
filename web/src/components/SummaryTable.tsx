import { HabitDay } from "./HabitDay"

const weekdays = [
  'D',
  'S',
  'T',
  'Q',
  'Q',
  'S',
  'S',
]

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekdays.map((weekday, index) => {
          return (
            <div key={`${index}-${weekday}`} className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center">
              {weekday}
            </div>
          )
        })}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        <HabitDay />
      </div>
    </div>
  )
}