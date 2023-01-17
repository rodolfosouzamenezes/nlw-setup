
interface HabitProps {
  completed: number;
}

export function Habit({ completed }: HabitProps) {
  return (
    <div className="bg-zinc-900 w-10 h-10 rounded m-2 text-white flex justify-center items-center">
      {completed}
    </div>
  )
}