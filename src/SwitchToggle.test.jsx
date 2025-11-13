import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach } from 'vitest'
import SwitchToggle from './components/SwitchToggle'

beforeEach(() => {
  // reset environment between tests
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})

describe('SwitchToggle - Interaction / DOM', () => {
  it('initializes from localStorage when present', () => {
    localStorage.setItem('theme', 'dark')
    render(<SwitchToggle label="dark mode" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox.checked).toBe(true)
  })

  it('toggles document class and localStorage when clicked', async () => {
    render(<SwitchToggle label="dark mode" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox.checked).toBe(false)

    await userEvent.click(checkbox)

    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(true)
      expect(localStorage.getItem('theme')).toBe('dark')
    })
  })

  it('broadcasts theme-change and syncs other instances', async () => {
    render(
      <div>
        <SwitchToggle label="one" />
        <SwitchToggle label="two" />
      </div>
    )

    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes.length).toBeGreaterThanOrEqual(2)
    expect(checkboxes[0].checked).toBe(false)
    expect(checkboxes[1].checked).toBe(false)

    await userEvent.click(checkboxes[0])

    await waitFor(() => {
      expect(checkboxes[1].checked).toBe(true)
    })
  })
})
