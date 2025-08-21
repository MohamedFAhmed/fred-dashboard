'use client'

import { Calendar } from 'lucide-react'

interface YearPickerProps {
  selectedYear: number
  onYearChange: (year: number) => void
}

export default function YearPicker({ selectedYear, onYearChange }: YearPickerProps) {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 1999 }, (_, i) => currentYear - i)

  return (
    <div className="flex items-center gap-2">
      <Calendar className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
      <select
        value={selectedYear}
        onChange={(e) => onYearChange(parseInt(e.target.value))}
        className="px-3 py-1 rounded-md border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-primary)',
          color: 'var(--text-primary)'
        }}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  )
}