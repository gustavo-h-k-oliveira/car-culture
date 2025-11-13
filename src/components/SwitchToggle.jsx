import React, { useState, useEffect } from 'react'

export default function SwitchToggle({ label = 'dark mode', variant = 'default', inputProps = {} }) {
  // variant: 'default' (label above) or 'compact' (inline)
  // Initialize synchronously from localStorage (if available) or existing DOM class.
  const [checked, setChecked] = useState(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return false
    try {
      const stored = window.localStorage.getItem('theme') // 'dark' | 'light' | null
      if (stored === 'dark') return true
      if (stored === 'light') return false
    } catch (e) {
      // ignore localStorage errors
    }
    return document.documentElement.classList.contains('dark')
  })

  // sync root class and persist when checked changes
  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return
    if (checked) {
      document.documentElement.classList.add('dark')
      try { window.localStorage.setItem('theme', 'dark') } catch (e) {}
    } else {
      document.documentElement.classList.remove('dark')
      try { window.localStorage.setItem('theme', 'light') } catch (e) {}
    }
  }, [checked])

  // Listen for theme-change broadcasts from other instances and sync
  useEffect(() => {
    if (typeof window === 'undefined') return
    const onThemeChange = (e) => {
      if (e && e.detail && typeof e.detail.dark === 'boolean') {
        setChecked(Boolean(e.detail.dark))
      }
    }
    window.addEventListener('theme-change', onThemeChange)
    return () => window.removeEventListener('theme-change', onThemeChange)
  }, [])

  const handleChange = (e) => {
    const next = Boolean(e.target.checked)
    setChecked(next)
    if (inputProps && typeof inputProps.onChange === 'function') inputProps.onChange(e)

    // broadcast to other instances so they stay in sync
    if (typeof window !== 'undefined') {
      try {
        window.dispatchEvent(new CustomEvent('theme-change', { detail: { dark: next } }))
      } catch (err) {
        // ignore dispatch errors in restrictive environments
      }
    }
  }

  // avoid clobbering user-provided checked/defaultChecked/onChange
  const safeInputProps = { ...(inputProps || {}) }
  delete safeInputProps.checked
  delete safeInputProps.defaultChecked
  delete safeInputProps.onChange

  // derive display labels: if user provided a custom label use it as darkLabel,
  // and derive a lightLabel by replacing 'dark' with 'light' when possible
  const darkLabel = label || 'dark mode'
  const lightLabel = (() => {
    const lower = darkLabel.toLowerCase()
    if (lower.includes('dark')) return darkLabel.replace(/dark/i, 'light')
    // fallback
    return 'light mode'
  })()
  const displayLabel = checked ? lightLabel : darkLabel

  const base = (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" checked={checked} onChange={handleChange} {...safeInputProps} />
      <div className="relative w-14 h-8 rounded-full peer bg-[var(--bluegrey300,#90A4AE)] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-[4px] after:bg-white dark:after:bg-[var(--bluegrey300)] after:rounded-full after:h-6 after:w-6 after:transition-all dark:peer-checked:bg-gray-200"></div>
    </label>
  )

  if (variant === 'compact') {
    return (
      <div className="flex items-center w-full justify-between">
        <p className="text-[var(--bluegrey300,#90A4AE)] dark:text-[var(--gray200)] [font-family:'Instrument Sans'] text-[1.25rem] font-medium select-none">{displayLabel}</p>
        {base}
      </div>
    )
  }

  return (
    <div className="flex flex-col w-[7rem] h-[3.875rem] justify-center items-center gap-[0.375rem]">
      <p className="text-[var(--bluegrey300,#90A4AE)] dark:text-[var(--gray200)] text-right [font-family:'Instrument Sans'] text-[1.25rem] font-medium [line-height:normal] select-none">{displayLabel}</p>
      {base}
    </div>
  )
}
