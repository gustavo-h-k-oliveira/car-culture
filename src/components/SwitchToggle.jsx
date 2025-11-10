import React from 'react'

export default function SwitchToggle({ label = 'dark mode', variant = 'default', inputProps = {} }) {
  // variant: 'default' (label above) or 'compact' (inline)
  const base = (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" {...inputProps} />
      <div className="relative w-14 h-8 rounded-full peer bg-[var(--bluegrey300,#90A4AE)] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
    </label>
  )

  if (variant === 'compact') {
    return (
      <div className="flex items-center w-full justify-between">
        <p className="text-[var(--bluegrey300,#90A4AE)] [font-family:'Instrument Sans'] text-[1.25rem] font-medium">{label}</p>
        {base}
      </div>
    )
  }

  return (
    <div className="flex flex-col w-[7rem] h-[3.875rem] justify-center items-center gap-[0.375rem]">
      <p className="text-[var(--bluegrey300,#90A4AE)] text-right [font-family:'Instrument Sans'] text-[1.25rem] font-medium [line-height:normal]">{label}</p>
      {base}
    </div>
  )
}
