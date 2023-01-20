import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from "react";

const availableWeekDays = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];


export function NewHabitForm() {
  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])

  const createNewHabit = (event: FormEvent) => {
    event.preventDefault();

    console.log(title, weekDays);
  }

  const handleToggleWeekDay = (weekDayIndex: number) => {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex])
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6 ">
      <label htmlFor="title" className="font-semibold leading-tight ">
        Qual seu comprometimento?
      </label>

      <input
        autoFocus
        type='text'
        id='title'
        onChange={event => setTitle(event.target.value)}
        placeholder='Ex: Beber 2L de água, Ir à academia...'
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>

      {
        availableWeekDays.map((availableWeekDay, index) => (
          <div key={`${availableWeekDay}-${index}`} className='mt-3 flex flex-col gap-2'>
            <Checkbox.Root
              onCheckedChange={() => handleToggleWeekDay(index)}
              className='flex items-center gap-3 group'
            >
              <div className='h-8 w-8 flex items-center justify-center rounded-lg  bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                <Checkbox.Indicator>
                  <Check className='text-white' size={20} />
                </Checkbox.Indicator>
              </div>
              <span className='text-white leading-tight'>
                {availableWeekDay}
              </span>
            </Checkbox.Root>
          </div>

        ))
      }
      <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-700">
        <Check size={20} weight='bold' />
        Confirmar
      </button>
    </form>
  )
}