import { Plus } from 'phosphor-react'
import logoImage from '../assets/logo.svg'

export function Header() {
  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={logoImage} alt="Habits Logo" />
      <div className='group'>
        <button
          type='button'
          className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 group-hover:border-violet-300'
        >
          <Plus size={22} className='text-violet-500 group-hover:text-violet-300' />
          Novo Hábito
        </button>
      </div>
    </div>
  )
}