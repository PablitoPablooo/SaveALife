'use client'

import { useState } from 'react'

const InputField = ({ type, name, text, value }: { type: string, name: string, text: string, value?: string}) => {
  const [fieldValue, setFieldValue] = useState(value ?? '')

  return (
    <div className='w-full flex flex-row items-center text-center justify-between gap-2 md:gap-4 lg:gap-8'>
      <label htmlFor={name}>{text}: </label>
      <input
        type={type}
        name={name}
        defaultValue={''}
        value={fieldValue}
        className='text-black p-1 px-2 rounded-full caret-red-500'
        onChange={(e) => setFieldValue(e.target.value)}
      />
    </div>
  )
}

export default InputField